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
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Eye, PackageIcon, Plus } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { useTasks } from "@/contexts/TaskContext";
import Loading from "@/components/Loading";

export default function Page() {
  const { user } = useAuth();
  const { tasks, loading } = useTasks();
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

          {loading ? (
            <Loading></Loading>
          ) : (
            <div className="px-8">
              <div className="flex flex-row justify-around border rounded-md">
                <div className="py-4 flex justify-between">
                  <div>
                    <h2 className="text-gray-500">Total projects</h2>
                    <p className="font-extrabold text-2xl mt-2">
                      {user && user.projects.length}
                    </p>
                  </div>
                </div>
                <div className="py-4 flex justify-between gap-4">
                  <Separator orientation="vertical"></Separator>
                  <div>
                    <h2 className="text-gray-500">Total tasks</h2>
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
                    <h2 className="text-gray-500">Completed Tasks</h2>
                    <p className="font-extrabold text-2xl mt-2">5</p>
                  </div>
                </div>
                <div className="py-4 flex justify-between gap-4">
                  <Separator orientation="vertical"></Separator>
                  <div>
                    <h2 className="text-gray-500">Incomplete Tasks</h2>
                    <p className="font-extrabold text-2xl mt-2">4</p>
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
                      <Card className="shadow-none dark:bg-background rounded-lg">
                        <CardHeader className="flex justify-between items-center">
                          <div>
                            <CardTitle>Web Mocup</CardTitle>
                            <CardDescription>
                              <span className="font-bold">Yellow Branding</span>{" "}
                              - Due in 20 hours
                            </CardDescription>
                          </div>
                          <div>
                            <Eye className="text-gray-500"></Eye>
                          </div>
                        </CardHeader>
                      </Card>
                      <Card className="shadow-none dark:bg-background rounded-lg">
                        <CardHeader className="flex justify-between items-center">
                          <div>
                            <CardTitle>Web Mocup</CardTitle>
                            <CardDescription>
                              <span className="font-bold">Yellow Branding</span>{" "}
                              - Due in 20 hours
                            </CardDescription>
                          </div>
                          <div>
                            <Eye className="text-gray-500"></Eye>
                          </div>
                        </CardHeader>
                      </Card>
                      <Card className="shadow-none dark:bg-background rounded-lg">
                        <CardHeader className="flex justify-between items-center">
                          <div>
                            <CardTitle>Web Mocup</CardTitle>
                            <CardDescription>
                              <span className="font-bold">Yellow Branding</span>{" "}
                              - Due in 20 hours
                            </CardDescription>
                          </div>
                          <div>
                            <Eye className="text-gray-500"></Eye>
                          </div>
                        </CardHeader>
                      </Card>
                      <Button size="sm" className="w-full">
                        Show All
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card className="shadow-none rounded-sm dark:bg-background">
                    <CardHeader>
                      <CardTitle>Projects</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <Separator></Separator>
                    <CardContent className="grid grid-cols-2 gap-x-2 gap-y-2">
                      <div className="shadow-none border px-4 flex flex-row transition-colors duration-300 space-x-2 items-center bg-background rounded-lg border-dashed cursor-pointer hover:bg-slate-50 dark:hover:dark:bg-slate-600">
                        <div className="bg-slate-200 dark:bg-slate-700 rounded-full p-1">
                          <Plus></Plus>
                        </div>
                        <span>New Project</span>
                      </div>
                      <Card className="shadow-none bg-background rounded-lg">
                        <CardHeader className="flex flex-row space-x-2 items-center">
                          <PackageIcon className="h-12 w-12 text-muted-foreground"></PackageIcon>
                          <div>
                            <CardTitle>Yellow Branding</CardTitle>
                            <CardDescription>1 task due soon</CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
                      <Card className="shadow-none bg-background rounded-lg">
                        <CardHeader className="flex flex-row space-x-2 items-center">
                          <PackageIcon className="h-12 w-12 text-muted-foreground"></PackageIcon>
                          <div>
                            <CardTitle>Yellow Branding</CardTitle>
                            <CardDescription>1 task due soon</CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
                      <Card className="shadow-none bg-background rounded-lg">
                        <CardHeader className="flex flex-row space-x-2 items-center">
                          <PackageIcon className="h-12 w-12 text-muted-foreground"></PackageIcon>
                          <div>
                            <CardTitle>Yellow Branding</CardTitle>
                            <CardDescription>1 task due soon</CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
                      <Card className="shadow-none bg-background rounded-lg">
                        <CardHeader className="flex flex-row space-x-2 items-center">
                          <PackageIcon className="h-12 w-12 text-muted-foreground"></PackageIcon>
                          <div>
                            <CardTitle>Yellow Branding</CardTitle>
                            <CardDescription>1 task due soon</CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
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
    </ProtectedRoute>
  );
}
