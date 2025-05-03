"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getProjectByUser } from "@/lib/api";
import { useAuth } from "./AuthContext";
type User = {
  id: string;
  email: string;
  name: string;
};
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
  userId: number;
  User: User;
  tasks: Task[];
  createdAt: string;
};

type ProjectContextType = {
  projects: Project[];
  loading: boolean;
  refreshProjects: () => Promise<void>;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchProjects = async () => {
    try {
      const data = await getProjectByUser();
      setProjects(data);
    } catch (error) {
      console.error("Erreur de récupération des projets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProjects();
    }
  }, [user]);

  return (
    <ProjectContext.Provider
      value={{ projects, loading, refreshProjects: fetchProjects }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
