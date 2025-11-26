
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Project } from '../types';
import { PROJECTS as INITIAL_PROJECTS } from '../constants';

interface DataContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    // Try to load from local storage first
    try {
      // Updated key to 'xr_portfolio_v12' to force fresh load of images/data
      const saved = localStorage.getItem('xr_portfolio_v12');
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch (e) {
      return INITIAL_PROJECTS;
    }
  });

  // Save to local storage whenever projects change
  useEffect(() => {
    localStorage.setItem('xr_portfolio_v12', JSON.stringify(projects));
  }, [projects]);

  const addProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

  const updateProject = (updatedProject: Project) => {
    setProjects(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <DataContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
