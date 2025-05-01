"use client";
import { AppSidebar } from "@/components/app-sidebar";
import Loading from "@/components/Loading";
import { NavActions } from "@/components/nav-actions";
import ProtectedRoute from "@/components/ProtectedRoute";
import TaskView from "@/components/TaskView";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import { useTasks } from "@/contexts/TaskContext";
import { createTask } from "@/lib/api";
import { Plus } from "lucide-react";
import { useState } from "react";
type Task = {
  id: string;
  title: string;
  description: string;
  projectId: number;
  priority: string;
  status: string;
  deadline: string;
};
export default function Tasks() {
  const { tasks, loading, refreshTasks } = useTasks();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState<number | null>(null);
  const [deadline, setDeadline] = useState<Date | undefined>();
  const [priority, setPriority] = useState("");
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"table" | "kanban" | "calendar">("table");

  const handleSubmit = async () => {
    if (!projectId || !deadline) return;
    const taskData = {
      title,
      description,
      projectId,
      deadline: deadline.toISOString().split("T")[0],
      priority: priority.toUpperCase(),
    };

    try {
      await createTask(taskData);
      setOpen(false);
      refreshTasks();
      setTitle("");
      setDescription("");
      setProjectId(null);
      setDeadline(undefined);
      setPriority("");
      toast.success("Task successfully added!");
    } catch (error) {
      console.error("Erreur création tâche:", error);
    }
  };

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
              <h2 className="font-bold">My Tasks</h2>
              <small>Monitor all of your tasks here</small>
            </div>
            <div className="ml-auto px-3">
              <NavActions />
            </div>
          </header>
          <div className="px-8">
            {loading ? (
              <Loading></Loading>
            ) : (
              <Card className="p-2 shadow-none border-none bg-background">
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
                              <Label htmlFor="projectId">Project</Label>
                              <Select
                                onValueChange={(value) =>
                                  setProjectId(Number(value))
                                }
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select the project"></SelectValue>
                                </SelectTrigger>
                                <SelectContent className="w-full">
                                  {user?.projects?.map((project: any) => (
                                    <SelectItem
                                      key={project.id}
                                      value={project.id.toString()}
                                      className="hover:bg-sidebar-accent cursor-pointer"
                                    >
                                      {project.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="description">Description</Label>
                              <Textarea
                                placeholder="Type your description here ..."
                                id="description"
                                name="description"
                                value={description}
                                className="h-52"
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
                  view={view}
                  tasks={tasks}
                  refreshTasks={refreshTasks}
                ></TaskView>
              </Card>
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
    </ProtectedRoute>
  );
}
