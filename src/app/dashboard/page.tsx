"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { NavActions } from "@/components/nav-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import toast, { Toaster } from "react-hot-toast";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Eye, PackageIcon, Plus } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useTasks } from "@/contexts/TaskContext";
import Loading from "@/components/Loading";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createProject } from "@/lib/api";
import { useProjects } from "@/contexts/ProjectContext";
import Link from "next/link";
import {
  getMonth,
  getYear,
  isThisMonth,
  parseISO,
} from "date-fns";
import SummaryCard from "@/components/SummaryCard";

function isLastMonth(date: Date): boolean {
  const now = new Date();

  const lastMonth = getMonth(now) === 0 ? 11 : getMonth(now) - 1;
  const year = getMonth(now) === 0 ? getYear(now) - 1 : getYear(now);

  return getMonth(date) === lastMonth && getYear(date) === year;
}

export default function Page() {
  const { tasks, loading: TaskLoading } = useTasks();
  const { projects, loading: ProjectLoading, refreshProjects } = useProjects();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    if (!name) return;

    try {
      await createProject({ name });
      setOpen(false);
      refreshProjects();
      setName("");
      toast.success("Project successfully added!");
    } catch (error) {
      console.error("Erreur création tâche:", error);
    }
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "COMPLETE"
  ).length;
  const incompletedTasks = tasks.filter(
    (task) => task.status !== "COMPLETE"
  ).length;

  const thisMonth = (date: string) => isThisMonth(parseISO(date));
  const lastMonth = (date: string) => isLastMonth(parseISO(date));

  const currentProjects = projects.filter((p) => thisMonth(p.createdAt)).length;
  const previousProjects = projects.filter((p) =>
    lastMonth(p.createdAt)
  ).length;

  const currentTasks = tasks.filter((t) => thisMonth(t.createdAt)).length;
  const previousTasks = tasks.filter((t) => lastMonth(t.createdAt)).length;

  const completedCurrent = tasks.filter(
    (t) => thisMonth(t.createdAt) && t.status === "COMPLETE"
  ).length;
  const completedPrevious = tasks.filter(
    (t) => lastMonth(t.createdAt) && t.status === "COMPLETE"
  ).length;

  console.log(completedCurrent);
  

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2">
            <div className="flex flex-1 items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <h2 className="font-bold">Home</h2>
              <small>Monitor all of your projects and tasks here</small>
            </div>
            <div className="ml-auto px-3">
              <NavActions />
            </div>
          </header>

          {TaskLoading || ProjectLoading ? (
            <Loading></Loading>
          ) : (
            <div className="px-8">
              <div className="flex flex-row justify-around border rounded-md">
                <div className="py-4 flex justify-between">
                  <div>
                    <div className="flex space-x-4">
                      <h2 className="text-gray-500">Total projects</h2>
                      <SummaryCard
                        title="Projects"
                        current={currentProjects}
                        previous={previousProjects}
                      ></SummaryCard>
                    </div>
                    <p className="font-extrabold text-2xl mt-2">
                      {projects && projects.length}
                    </p>
                  </div>
                </div>
                <div className="py-4 flex justify-between gap-4">
                  <Separator orientation="vertical"></Separator>
                  <div>
                    <div className="flex space-x-4">
                      <h2 className="text-gray-500">Total tasks</h2>
                      <SummaryCard
                        title="Tasks"
                        current={currentTasks}
                        previous={previousTasks}
                      ></SummaryCard>
                    </div>
                    <p className="font-extrabold text-2xl mt-2">
                      {tasks && tasks.length}
                    </p>
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
                    <div className="flex space-x-4">
                      <h2 className="text-gray-500">Completed Tasks</h2>
                      <SummaryCard
                        title="Completed Tasks"
                        current={completedCurrent}
                        previous={completedPrevious}
                      ></SummaryCard>
                    </div>
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

              <div className="grid grid-cols-2 mt-4 gap-2">
                <div>
                  <Card className="shadow-none bg-sidebar rounded-sm">
                    <CardHeader>
                      <CardTitle>Assigned Tasks</CardTitle>
                    </CardHeader>
                    <Separator></Separator>
                    <CardContent className="space-y-1">
                      {[1, 2, 3].map((_, index) => {
                        return (
                          <Card
                            key={index}
                            className="shadow-none dark:bg-background rounded-lg transition-all cursor-pointer hover:translate-y-[-2px]"
                          >
                            <CardHeader className="flex justify-between items-center">
                              <div>
                                <CardTitle>Web Mocup</CardTitle>
                                <CardDescription>
                                  <span className="font-bold">
                                    Yellow Branding
                                  </span>{" "}
                                  - Due in 20 hours
                                </CardDescription>
                              </div>
                              <div>
                                <Eye className="text-gray-500"></Eye>
                              </div>
                            </CardHeader>
                          </Card>
                        );
                      })}
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card className="shadow-none rounded-sm dark:bg-background">
                    <CardHeader>
                      <CardTitle>Recently added</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <Separator></Separator>
                    <CardContent className="grid grid-cols-2 gap-x-2 gap-y-2">
                      <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                          <div className="shadow-none border px-4 flex flex-row transition-colors duration-300 space-x-2 items-center bg-background rounded-lg border-dashed cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                            <div className="bg-slate-200 dark:bg-slate-700 rounded-full p-1">
                              <Plus></Plus>
                            </div>
                            <span>New Project</span>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[400px]">
                          <DialogHeader>
                            <DialogTitle>Add Project</DialogTitle>
                            <DialogDescription>
                              Add new project
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Entrer the name of the project"
                              className="w-full"
                            ></Input>
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
                      {projects &&
                        projects.slice(0, 5).map((project, index) => (
                          <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                          >
                            <Card className="shadow-none hover:shadow-sm transition-all border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-2px]">
                              <CardHeader className="flex flex-row space-x-2 items-center">
                                <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                                  <PackageIcon className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                                </div>
                                <div>
                                  <CardTitle className="text-base font-medium">
                                    {project.name}
                                  </CardTitle>
                                  <CardDescription className="text-xs mt-1">
                                    1 task due soon
                                  </CardDescription>
                                </div>
                              </CardHeader>
                            </Card>
                          </Link>
                        ))}
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card className="shadow-none rounded-sm">
                    <CardHeader>
                      <CardTitle>Projects</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <Separator></Separator>
                    <CardContent></CardContent>
                  </Card>
                </div>
                <div>
                  <Card className="shadow-none rounded-sm">
                    <CardHeader>
                      <CardTitle>Projects</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <Separator></Separator>
                    <CardContent></CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </SidebarInset>
      </SidebarProvider>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
    </ProtectedRoute>
  );
}
