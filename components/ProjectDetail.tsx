import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Calendar, User, Briefcase } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex flex-col bg-xr-dark/95 backdrop-blur-md overflow-y-auto"
    >
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 flex justify-between items-center p-6 bg-xr-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
           <button 
             onClick={onClose}
             className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <span className="text-lg">←</span> Back to Projects
           </button>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-5xl mx-auto w-full px-6 py-8 md:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="aspect-video w-full overflow-hidden rounded-3xl mb-8 relative group">
             <img 
               src={project.imageUrl} 
               alt={project.title} 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <span className={`inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider backdrop-blur-md text-white border border-white/10 rounded-full ${
                    project.filter === 'VR' ? 'bg-purple-500/80' :
                    project.filter === 'AR' ? 'bg-blue-500/80' :
                    project.filter === 'IoT' ? 'bg-emerald-500/80' :
                    project.filter === 'AI' ? 'bg-rose-500/80' :
                    'bg-zinc-500/80'
                }`}>
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white">
                  {project.title}
                </h1>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
             {/* Left Column: Meta Info */}
             <div className="md:col-span-1 space-y-8">
                
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
                  >
                    View Project <ExternalLink size={18} className="ml-2" />
                  </a>
                )}

                <div className="space-y-6 p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
                   {project.role && (
                     <div>
                       <div className="flex items-center gap-2 text-zinc-500 mb-1 text-sm uppercase tracking-wide">
                          <User size={14} /> Role
                       </div>
                       <p className="text-white font-medium">{project.role}</p>
                     </div>
                   )}
                   {project.year && (
                     <div>
                       <div className="flex items-center gap-2 text-zinc-500 mb-1 text-sm uppercase tracking-wide">
                          <Calendar size={14} /> Year
                       </div>
                       <p className="text-white font-medium">{project.year}</p>
                     </div>
                   )}
                   {project.client && (
                     <div>
                       <div className="flex items-center gap-2 text-zinc-500 mb-1 text-sm uppercase tracking-wide">
                          <Briefcase size={14} /> Context
                       </div>
                       <p className="text-white font-medium">{project.client}</p>
                     </div>
                   )}
                </div>

                <div>
                   <h3 className="text-sm uppercase tracking-wide text-zinc-500 mb-4">Technologies</h3>
                   <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800 rounded-lg border border-zinc-700/50">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>
             </div>

             {/* Right Column: Content */}
             <div className="md:col-span-2 space-y-10">
                <div>
                   <h2 className="text-2xl font-display font-bold text-white mb-4">Overview</h2>
                   <p className="text-zinc-300 leading-relaxed text-lg">
                      {project.description}
                   </p>
                </div>

                {(project.challenge || project.solution) && (
                  <div className="grid grid-cols-1 gap-8">
                    {project.challenge && (
                      <div className="bg-zinc-900/30 p-6 rounded-2xl border border-red-500/10 hover:border-red-500/20 transition-colors">
                        <h3 className="text-xl font-display font-bold text-white mb-3 flex items-center gap-2">
                           <span className="w-2 h-8 bg-red-500 rounded-full"></span>
                           The Challenge
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                    )}
                    
                    {project.solution && (
                      <div className="bg-zinc-900/30 p-6 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/20 transition-colors">
                        <h3 className="text-xl font-display font-bold text-white mb-3 flex items-center gap-2">
                           <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                           The Solution
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {project.outcome && (
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-4">Outcome</h2>
                    <p className="text-zinc-300 leading-relaxed">
                       {project.outcome}
                    </p>
                  </div>
                )}
             </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;