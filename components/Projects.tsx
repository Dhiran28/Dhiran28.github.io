import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, AlertCircle, CheckCircle2, Zap } from 'lucide-react';
import { useData } from '../context/DataContext';
import { ProjectFilter, Project } from '../types';
import ProjectDetail from './ProjectDetail';

const TABS: { id: ProjectFilter | 'All'; label: string }[] = [
  { id: 'All', label: 'All Projects' },
  { id: 'AI', label: 'AI & Robotics' },
  { id: 'VR', label: 'VR' },
  { id: 'AR', label: 'AR' },
  { id: 'IoT', label: 'IoT' },
];

const Projects: React.FC = () => {
  const { projects } = useData();
  const [activeTab, setActiveTab] = useState<ProjectFilter | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.filter === activeTab);

  return (
    <section id="projects" className="py-24 relative min-h-screen bg-black/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-xr-primary to-xr-accent">Projects</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Real-world problems solved using artificial intelligence, spatial computing, robotics, and edge hardware.
          </p>

          {/* Tab Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 p-1.5 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-black' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-zinc-900/90 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 h-full cursor-pointer shadow-xl hover:shadow-2xl"
              >
                {/* Image & Badge */}
                <div className="relative w-full h-48 overflow-hidden bg-zinc-950">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = "https://picsum.photos/seed/project/800/450";
                    }}
                  />
                  
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md text-white bg-black/60 border border-white/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Structured Project Copy */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-xr-accent transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <ArrowRight size={18} className="text-zinc-500 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                    </div>

                    {/* Problem */}
                    {project.problem && (
                      <div className="mb-3 text-xs leading-relaxed">
                        <span className="font-bold uppercase tracking-wider text-rose-400 block mb-0.5">Problem</span>
                        <p className="text-zinc-300 font-normal">{project.problem}</p>
                      </div>
                    )}

                    {/* Solution */}
                    {project.solution && (
                      <div className="mb-4 text-xs leading-relaxed">
                        <span className="font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">Solution</span>
                        <p className="text-zinc-300 font-normal">{project.solution}</p>
                      </div>
                    )}

                    {/* Impact / Key Achievement */}
                    {project.impact && (
                      <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 mb-4 font-medium flex items-start gap-2">
                        <Zap size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-white font-semibold">Impact:</strong> {project.impact}</span>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-[11px] font-medium text-zinc-300 bg-zinc-800/80 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500">No projects found in this category.</p>
          </div>
        )}

        <div className="flex justify-center mt-12">
          <a 
            href="https://github.com/Dhiran28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-white pb-0.5"
          >
            Explore full engineering codebase on GitHub <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;