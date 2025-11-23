import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';
import { ProjectFilter, Project } from '../types';
import ProjectDetail from './ProjectDetail';

const TABS: { id: ProjectFilter | 'All'; label: string }[] = [
  { id: 'All', label: 'All Projects' },
  { id: 'AR', label: 'AR' },
  { id: 'VR', label: 'VR' },
  { id: 'XR', label: 'WebXR / 3D' },
  { id: 'IoT', label: 'IoT' },
  { id: 'AI', label: 'AI & Robotics' },
];

const Projects: React.FC = () => {
  const { projects } = useData();
  const [activeTab, setActiveTab] = useState<ProjectFilter | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.filter === activeTab);

  return (
    <section id="projects" className="py-24 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Selected Works
          </motion.h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            Explore a curated portfolio spanning immersive realities, intelligent systems, and connected hardware.
          </p>

          {/* Custom Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-full">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-black' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/20 transition-colors h-full cursor-pointer"
              >
                {/* Image Area */}
                <div className="relative w-full h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-md text-white border border-white/10 rounded-full ${
                        project.filter === 'VR' ? 'bg-purple-500/80' :
                        project.filter === 'AR' ? 'bg-blue-500/80' :
                        project.filter === 'IoT' ? 'bg-emerald-500/80' :
                        project.filter === 'AI' ? 'bg-rose-500/80' :
                        'bg-zinc-500/80'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-xr-accent transition-colors">
                      {project.title}
                      </h3>
                      <ArrowRight size={20} className="text-zinc-600 group-hover:text-white -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                  
                  <p className="text-zinc-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs text-zinc-500 bg-zinc-800 rounded border border-zinc-700/50">
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs text-zinc-500 bg-zinc-800 rounded border border-zinc-700/50">
                            +{project.tags.length - 3}
                        </span>
                    )}
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
                View full archive on GitHub <ExternalLink size={16} className="ml-2" />
            </a>
        </div>
      </div>

      {/* Detail Overlay */}
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