"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getTasksByUser } from "@/lib/api";
import { useAuth } from "./AuthContext";
type Task = {
  id: string;
  title: string;
  description: string;
  projectId: number;
  priority: string;
  status: string;
  deadline: string;
  createdAt: string;
};

type TaskContextType = {
  tasks: Task[];
  loading: boolean;
  refreshTasks: () => Promise<void>;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchTasks = async () => {
    try {
      const data = await getTasksByUser();
      setTasks(data);
    } catch (error) {
      console.error("Erreur de récupération des tâches:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  return (
    <TaskContext.Provider value={{ tasks, loading, refreshTasks: fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
