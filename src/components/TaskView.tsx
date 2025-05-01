import DateFormatter from "@/components/DateFormatter";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Circle,
  CircleCheck,
  CircleDashed,
  Ellipsis,
  Plus,
} from "lucide-react";
import { updateTaskStatus } from "@/lib/api";
import NoData from "./NoData";
type Task = {
  id: string;
  title: string;
  description: string;
  projectId: number;
  priority: string;
  status: string;
  deadline: string;
};
type columnId = "TODO" | "INPROGRESSE" | "COMPLETE";
const columns: { id: columnId; title: string }[] = [
  { id: "TODO", title: "To Do" },
  { id: "INPROGRESSE", title: "In Progress" },
  { id: "COMPLETE", title: "Done" },
];
type TaskProps = {
  view: string;
  tasks: Task[];
  refreshTasks: () => Promise<void>;
};
export default function TaskView({ view, tasks, refreshTasks }: TaskProps) {
  const { user } = useAuth();
  const [columnsData, setColumnsData] = useState<Record<columnId, Task[]>>({
    TODO: tasks.filter((task) => task.status === "TODO"),
    INPROGRESSE: tasks.filter((task) => task.status === "INPROGRESSE"),
    COMPLETE: tasks.filter((task) => task.status === "COMPLETE"),
  });

  useEffect(() => {
    setColumnsData({
      TODO: tasks.filter((task) => task.status === "TODO"),
      INPROGRESSE: tasks.filter((task) => task.status === "INPROGRESSE"),
      COMPLETE: tasks.filter((task) => task.status === "COMPLETE"),
    });
  }, [tasks]);

  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  console.log(draggedTaskId);

  const handleDragStart = (taskId: string) => {
    setDraggedTaskId(taskId);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = async (columnId: string) => {
    if (!draggedTaskId) return;

    const sourceColumn = Object.keys(columnsData).find((colId) =>
      columnsData[colId as keyof typeof columnsData].some(
        (task) => task.id.toString() === draggedTaskId
      )
    );

    if (!sourceColumn) return;

    const taskToMove = columnsData[
      sourceColumn as keyof typeof columnsData
    ].find((task) => task.id.toString() === draggedTaskId);

    if (!taskToMove) return;

    setColumnsData((prev) => {
      const newSourceTasks = prev[
        sourceColumn as keyof typeof columnsData
      ].filter((task) => task.id.toString() !== draggedTaskId);
      const newDestinationTasks = [
        ...prev[columnId as keyof typeof columnsData],
        { ...taskToMove, status: columnId },
      ];

      return {
        ...prev,
        [sourceColumn]: newSourceTasks,
        [columnId]: newDestinationTasks,
      };
    });

    try {
      await updateTaskStatus(Number(draggedTaskId), columnId);
      await refreshTasks();
    } catch (error) {
      console.error("Erreur de mise à jour du status");
    }

    setDraggedTaskId(null);
  };
  const getStatus = (status: string): { text: string; className: string } => {
    switch (status) {
      case "TODO":
        return {
          text: "To do",
          className: "bg-rose-100 text-rose-800 border border-rose-300",
        };
      case "INPROGRESSE":
        return {
          text: "In progresse",
          className: "bg-yellow-100 text-yellow-800 border border-yellow-300",
        };
      case "COMPLETE":
        return {
          text: "Done",
          className: "bg-green-100 text-green-800 border border-green-300",
        };
      default:
        return {
          text: "Inconnu",
          className: "bg-blue-100 text-blue-800 border border-blue-300",
        };
    }
  };
  const getPriority = (priority: string): string => {
    switch (priority) {
      case "FAIBLE":
        return "Faible";
      case "MOYENNE":
        return "Moyenne";
      case "ELEVE":
        return "Elévée";
      default:
        return "Inconnue";
    }
  };
  const getProjectName = (task: Task) => {
    const project = user?.projects.find(
      (project: { id: number; name: string }) => project.id === task.projectId
    );

    return project?.name;
  };
  return (
    <div>
      {view === "table" &&
        (tasks.length === 0 ? (
          <NoData></NoData>
        ) : (
          <Table className="mt-2">
            <TableHeader>
              <TableRow className="dark:bg-card bg-sidebar">
                <TableHead>Task Name</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => {
                const { text, className } = getStatus(task.status);
                return (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.title}</TableCell>
                    <TableCell>{getProjectName(task)}</TableCell>
                    <TableCell>
                      <DateFormatter date={task.deadline}></DateFormatter>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${className} rounded-2xl font-medium`}>
                        {text}
                      </Badge>
                    </TableCell>
                    <TableCell>{getPriority(task.priority)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ))}
      {view === "kanban" && (
        <div>
          {tasks.length === 0 && <NoData></NoData>}
          <div className="p-2 bg-gray-50 dark:bg-card/40 mt-2">
            <div className="flex gap-5 overflow-x-auto">
              {columns.map((col) => (
                <div
                  key={col.id}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(col.id)}
                  className="bg-white dark:bg-background  rounded px-2 py-2 w-80 flex flex-col"
                >
                  {/* Board category header */}
                  <div className="flex flex-row justify-between items-center mb-2 mx-1">
                    <div className="flex items-center">
                      <h2
                        className={`${
                          col.id === "TODO"
                            ? "bg-red-100"
                            : col.id === "INPROGRESSE"
                            ? "bg-yellow-100"
                            : "bg-green-100"
                        } text-sm w-max px-2 flex flex-row  items-center gap-x-2 rounded mr-2 text-gray-700`}
                      >
                        {col.id === "TODO" && (
                          <Circle size={16} className="text-red-400"></Circle>
                        )}{" "}
                        {col.id === "INPROGRESSE" && (
                          <CircleDashed
                            size={16}
                            className="text-amber-400"
                          ></CircleDashed>
                        )}{" "}
                        {col.id === "COMPLETE" && (
                          <CircleCheck
                            fill="green"
                            size={16}
                            className="text-green-400"
                          ></CircleCheck>
                        )}{" "}
                        {col.title}
                      </h2>
                      <p className="text-gray-400 text-sm">
                        {columnsData[col.id]?.length || 0}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <p className="mr-2 text-xl">
                        <Ellipsis></Ellipsis>
                      </p>
                      <p className="text-md">
                        <Plus></Plus>
                      </p>
                    </div>
                  </div>

                  {/* Board cards */}
                  <div className="flex-grow overflow-y-auto">
                    <div className="grid gap-2">
                      {columnsData[col.id]?.map((task: Task) => (
                        <div
                          key={task.id}
                          draggable
                          onDragStart={() =>
                            handleDragStart(task.id.toString())
                          }
                          className="p-2 rounded shadow-sm border-gray-100 dark:border-card/50 dark:hover:border-card border-2 cursor-move hover:border-gray-200 transition-colors"
                        >
                          <h3 className="text-sm mb-3 text-gray-700 dark:text-white font-bold">
                            {task.title}
                          </h3>

                          {task.priority && (
                            <div className="mt-2">
                              <span
                                className={`text-xs w-max p-1 rounded mr-2 ${
                                  task.priority === "ELEVE"
                                    ? "bg-red-50 text-red-600"
                                    : task.priority === "MOYENNE"
                                    ? "bg-yellow-50 text-yellow-600"
                                    : "bg-green-50 text-green-600"
                                }`}
                              >
                                {task.priority === "ELEVE"
                                  ? "Priorité haute"
                                  : task.priority === "MOYENNE"
                                  ? "Priorité moyenne"
                                  : task.priority === "FAIBLE"
                                  ? "Priorité basse"
                                  : task.priority}
                              </span>
                            </div>
                          )}

                          <p className="text-xs text-gray-500 mt-2">
                            <DateFormatter date={task.deadline} />
                          </p>

                          {getProjectName(task) && (
                            <p className="text-xs text-gray-500 mt-2 bg-blue-50 p-1 rounded w-max">
                              {getProjectName(task)}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
