import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Project, ProjectFilter } from '../types';
import { Plus, Edit2, Trash2, X, Save, ArrowLeft, Image as ImageIcon, Lock, LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useData();
  
  // --- AUTHENTICATION STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // --- DASHBOARD STATE ---
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Check session storage on load to keep user logged in during refresh
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('xr_dashboard_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // PASSWORD CONFIGURATION
    // You can change 'admin2024' to your preferred password here
    if (passwordInput === 'admin2024') {
      setIsAuthenticated(true);
      sessionStorage.setItem('xr_dashboard_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Try "admin2024"');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('xr_dashboard_auth');
    setPasswordInput('');
  };

  const initialProjectState: Project = {
    id: '',
    title: '',
    category: '',
    filter: 'VR',
    description: '',
    tags: [],
    imageUrl: '',
    role: '',
    year: new Date().getFullYear().toString(),
    client: '',
    challenge: '',
    solution: '',
    outcome: '',
    link: ''
  };

  const [formData, setFormData] = useState<Project>(initialProjectState);

  const handleEdit = (project: Project) => {
    setFormData(project);
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setFormData({
      ...initialProjectState,
      id: Date.now().toString(),
    });
    setEditingProject(null);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      updateProject(formData);
    } else {
      addProject(formData);
    }
    setIsFormOpen(false);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(t => t.trim());
    setFormData({ ...formData, tags });
  };

  // --- RENDER LOGIN SCREEN IF NOT AUTHENTICATED ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-xr-dark flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="text-xr-primary" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-zinc-400 mb-8">Enter password to manage projects.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                placeholder="Enter Password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-xr-primary transition-colors text-center tracking-widest"
              />
            </div>
            {authError && <p className="text-red-500 text-sm font-medium animate-pulse">{authError}</p>}
            <button 
              type="submit"
              className="w-full py-3 bg-xr-primary hover:bg-indigo-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
            >
              Login
            </button>
          </form>
          <Link to="/" className="block mt-8 text-zinc-500 hover:text-white text-sm transition-colors">
            ← Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // --- RENDER DASHBOARD IF AUTHENTICATED ---
  return (
    <div className="min-h-screen bg-xr-dark text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-display font-bold">Project Dashboard</h1>
              <p className="text-zinc-500 text-sm">Manage your portfolio content</p>
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-white/10 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <LogOut size={16} /> Logout
            </button>
            <button
              onClick={handleAddNew}
              className="flex-1 md:flex-none flex items-center justify-center px-4 py-2 bg-xr-primary text-white rounded-lg hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20"
            >
              <Plus size={20} className="mr-2" /> Add Project
            </button>
          </div>
        </div>

        {/* Project List */}
        {!isFormOpen ? (
          <div className="grid gap-6">
            {projects.length === 0 && (
              <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
                <p className="text-zinc-500 mb-4">No projects found.</p>
                <button onClick={handleAddNew} className="text-xr-primary hover:underline">Create your first project</button>
              </div>
            )}
            {projects.map((project) => (
              <div key={project.id} className="bg-zinc-900 border border-white/5 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-white/10 transition-colors">
                <div className="w-full md:w-32 h-20 bg-black rounded-lg overflow-hidden flex-shrink-0 relative">
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-700">
                      <ImageIcon size={24} />
                    </div>
                  )}
                </div>
                
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold truncate">{project.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded border uppercase tracking-wider ${
                      project.filter === 'VR' ? 'border-purple-500 text-purple-400' :
                      project.filter === 'AR' ? 'border-blue-500 text-blue-400' :
                      project.filter === 'IoT' ? 'border-emerald-500 text-emerald-400' :
                      project.filter === 'AI' ? 'border-rose-500 text-rose-400' :
                      'border-zinc-500 text-zinc-400'
                    }`}>
                      {project.filter}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm line-clamp-1">{project.description}</p>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 md:flex-none px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Edit2 size={16} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 md:flex-none px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Edit Form */
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
              <h2 className="text-2xl font-bold">{editingProject ? 'Edit Project' : 'New Project'}</h2>
              <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-white/5 rounded-full text-zinc-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Basic Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white/90 mb-4">Card Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Project Title</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Category Label (displayed on card)</label>
                    <input
                      type="text"
                      required
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                      placeholder="e.g. Virtual Reality, WebXR"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Filter Category (for tabs)</label>
                    <select
                      value={formData.filter}
                      onChange={e => setFormData({...formData, filter: e.target.value as ProjectFilter})}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors"
                    >
                      <option value="VR">VR</option>
                      <option value="AR">AR</option>
                      <option value="XR">XR / Web3D</option>
                      <option value="IoT">IoT</option>
                      <option value="AI">AI & Robotics</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Image URL</label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={formData.imageUrl}
                        onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                        placeholder="https://..."
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors"
                      />
                      <div className="w-12 h-12 bg-black rounded border border-white/10 overflow-hidden flex-shrink-0 relative">
                          {formData.imageUrl ? (
                              <img src={formData.imageUrl} className="w-full h-full object-cover" alt="Preview" />
                          ) : <div className="w-full h-full flex items-center justify-center text-zinc-600"><ImageIcon size={16}/></div>}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Short Description</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={formData.tags.join(', ')}
                    onChange={handleTagChange}
                    placeholder="Unity, C#, IoT..."
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors"
                  />
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 space-y-6">
                <h3 className="text-lg font-semibold text-white/90 mb-4">Detailed View Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Role</label>
                      <input type="text" value={formData.role || ''} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Year</label>
                      <input type="text" value={formData.year || ''} onChange={e => setFormData({...formData, year: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Client / Context</label>
                      <input type="text" value={formData.client || ''} onChange={e => setFormData({...formData, client: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">The Challenge</label>
                  <textarea rows={3} value={formData.challenge || ''} onChange={e => setFormData({...formData, challenge: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">The Solution</label>
                  <textarea rows={3} value={formData.solution || ''} onChange={e => setFormData({...formData, solution: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">The Outcome</label>
                  <textarea rows={3} value={formData.outcome || ''} onChange={e => setFormData({...formData, outcome: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">External Link / Video URL</label>
                    <input type="text" value={formData.link || ''} onChange={e => setFormData({...formData, link: e.target.value})} placeholder="https://youtube.com/..." className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-xr-primary transition-colors" />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-xr-primary hover:bg-indigo-600 text-white rounded-lg font-bold transition-colors flex items-center shadow-lg shadow-indigo-500/20"
                >
                  <Save size={20} className="mr-2" /> Save Project
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;