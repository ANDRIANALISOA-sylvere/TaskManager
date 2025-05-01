"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { NavActions } from "@/components/nav-actions";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import toast, { Toaster } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TaskView from "@/components/TaskView";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { createTask, getProjectById } from "@/lib/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Loading from "@/components/Loading";
type Task = {
  id: string;
  title: string;
  description: string;
  projectId: number;
  priority: string;
  status: string;
  deadline: string;
};
type Project = {
  id: number;
  name: string;
  tasks: Task[];
};
export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState<Date | undefined>();
  const [priority, setPriority] = useState("");
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"table" | "kanban" | "calendar">("table");
  const [loading, setLoading] = useState(true);

  const fetchProject = async () => {
    try {
      const data = await getProjectById(Number(id));
      setProject(data);
      setLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        setError("Vous n'avez pas accès à ce projet");
      } else {
        setError("Le projet n'existe pas ou une erreur est survenue");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    if (user) {
      fetchProject();
    }
  }, [id, user]);

  const handleSubmit = async () => {
    if (!deadline) return;
    const taskData = {
      title,
      description,
      projectId: Number(id),
      deadline: deadline.toISOString().split("T")[0],
      priority: priority.toUpperCase(),
    };

    try {
      await createTask(taskData);
      setOpen(false);
      fetchProject();
      setTitle("");
      setDescription("");
      setDeadline(undefined);
      setPriority("");
      toast.success("Task successfully added!");
    } catch (error) {
      console.error("Erreur création tâche:", error);
    }
  };

  const completedTasks = project?.tasks.filter(
    (task) => task.status === "COMPLETE"
  ).length;
  const incompletedTasks = project?.tasks.filter(
    (task) => task.status !== "COMPLETE"
  ).length;

  if (error) return <div>{error}</div>;

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar></AppSidebar>
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2">
            <div className="flex flex-1 items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <h2 className="font-bold">Project Details</h2>
              <small>Manage project and task here</small>
            </div>
            <div className="ml-auto px-3">
              <NavActions />
            </div>
          </header>

          {loading || !project ? (
            <Loading></Loading>
          ) : (
            <div className="px-8">
              <div className="flex flex-row space-x-2 place-items-center">
                <Image
                  width={30}
                  height={30}
                  src="/images.jpeg"
                  alt="logo"
                ></Image>
                <h1 className="font-bold text-xl">{project?.name}</h1>
              </div>
              <div className="flex flex-row justify-around border mt-6 rounded-md">
                <div className="py-4 flex justify-between">
                  <div>
                    <h2 className="text-gray-500">Total tasks</h2>
                    <p className="font-extrabold text-2xl mt-2">
                      {project && project.tasks.length}
                    </p>
                  </div>
                </div>
                <div className="py-4 flex justify-between gap-4">
                  <Separator orientation="vertical"></Separator>
                  <div>
                    <h2 className="text-gray-500">Total tasks</h2>
                    <p className="font-extrabold text-2xl mt-2">1</p>
                  </div>
                </div>
                <div className="py-4 flex justify-between gap-4">
                  <Separator orientation="vertical"></Separator>
                  <div>
                    <h2 className="text-gray-500">Assigned Tasks</h2>
                    <p className="font-extrabold text-2xl mt-2">14</p>
                  </div>
                </div>
                <div className="py-4 flex justify-between gap-4">
                  <Separator orientation="vertical"></Separator>
                  <div>
                    <h2 className="text-gray-500">Completed Tasks</h2>
                    <p className="font-extrabold text-2xl mt-2">
                      {completedTasks}
                    </p>
                  </div>
                </div>
                <div className="py-4 flex justify-between gap-4">
                  <Separator orientation="vertical"></Separator>
                  <div>
                    <h2 className="text-gray-500">Incomplete Tasks</h2>
                    <p className="font-extrabold text-2xl mt-2">
                      {incompletedTasks}
                    </p>
                  </div>
                </div>
              </div>
              <Card className="p-2 shadow-none border-none bg-background mt-4">
                <div className="flex justify-between border-b py-2">
                  <div className="space-x-2">
                    <Button
                      size="sm"
                      className={`cursor-pointer ${
                        view !== "table" &&
                        "dark:bg-gray-50  dark:opacity-35 bg-gray-500"
                      }`}
                      onClick={() => setView("table")}
                    >
                      Table
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setView("kanban")}
                      className={`cursor-pointer ${
                        view !== "kanban" &&
                        "dark:bg-gray-50 dark:opacity-35 bg-gray-500"
                      }`}
                    >
                      Kanban
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setView("calendar")}
                      className={`cursor-pointer ${
                        view !== "calendar" &&
                        "dark:bg-gray-50 dark:opacity-35 bg-gray-500"
                      }`}
                    >
                      Calendar
                    </Button>
                  </div>
                  <div>
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-blue-500 text-white cursor-pointer hover:bg-blue-800"
                        >
                          <Plus></Plus> New
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Add Task</DialogTitle>
                          <DialogDescription>Add new task</DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                              type="text"
                              id="title"
                              name="title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder="Entrer the title"
                              className="w-full"
                            ></Input>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="priority">Priority</Label>
                            <Select
                              value={priority}
                              onValueChange={setPriority}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select the priority"></SelectValue>
                              </SelectTrigger>
                              <SelectContent className="w-full">
                                <SelectItem
                                  value="faible"
                                  className="hover:bg-sidebar-accent cursor-pointer"
                                >
                                  Faible
                                </SelectItem>
                                <SelectItem
                                  value="moyenne"
                                  className="hover:bg-sidebar-accent cursor-pointer"
                                >
                                  Moyenne
                                </SelectItem>
                                <SelectItem
                                  value="Eleve"
                                  className="hover:bg-sidebar-accent cursor-pointer"
                                >
                                  Elevée
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="deadline">Deadline</Label>
                              <Calendar
                                mode="single"
                                selected={deadline}
                                onSelect={setDeadline}
                                className="rounded-md border w-full"
                              ></Calendar>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="description">Description</Label>
                              <Textarea
                                placeholder="Type your description here ..."
                                id="description"
                                name="description"
                                value={description}
                                className="h-68"
                                onChange={(e) => setDescription(e.target.value)}
                              ></Textarea>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            onClick={handleSubmit}
                            className="cursor-pointer"
                          >
                            Save
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <TaskView
                  tasks={project.tasks}
                  view={view}
                  refreshTasks={fetchProject}
                ></TaskView>
              </Card>
            </div>
          )}
        </SidebarInset>
      </SidebarProvider>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
    </ProtectedRoute>
  );
}
