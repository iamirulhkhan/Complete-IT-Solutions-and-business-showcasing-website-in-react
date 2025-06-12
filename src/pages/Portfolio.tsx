import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Play,
  Filter,
  Star,
  Calendar,
  Users,
  Code,
  Smartphone,
  Cloud,
  BarChart3,
  ShoppingCart,
  Globe,
} from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'web', name: 'Web Development', icon: Code },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  ];

  const projects = [
    {
      id: 1,
      title: 'EcoCommerce Platform',
      category: 'ecommerce',
      description: 'Sustainable e-commerce platform with AI-powered recommendations',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'Green Earth Co.',
      duration: '4 months',
      rating: 5,
      testimonial: 'Exceptional work! Our sales increased by 300% after launch.',
      features: ['AI Recommendations', 'Sustainable Products Focus', 'Multi-vendor Support', 'Mobile Responsive'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'HealthTrack Mobile App',
      category: 'mobile',
      description: 'Comprehensive health tracking app with wearable integration',
      image: 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit'],
      client: 'MedTech Solutions',
      duration: '6 months',
      rating: 5,
      testimonial: 'Users love the intuitive interface and comprehensive tracking features.',
      features: ['Wearable Integration', 'Health Analytics', 'Doctor Portal', 'Medication Reminders'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'CloudScale Infrastructure',
      category: 'cloud',
      description: 'Auto-scaling cloud infrastructure for high-traffic applications',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      client: 'StartupTech Inc.',
      duration: '3 months',
      rating: 5,
      testimonial: 'Reduced our infrastructure costs by 40% while improving performance.',
      features: ['Auto-scaling', 'Load Balancing', 'CI/CD Pipeline', '99.9% Uptime'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Analytics Dashboard Pro',
      category: 'analytics',
      description: 'Real-time business intelligence dashboard with predictive analytics',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      client: 'DataDriven Corp.',
      duration: '5 months',
      rating: 5,
      testimonial: 'The insights from this dashboard transformed our decision-making process.',
      features: ['Real-time Data', 'Predictive Analytics', 'Custom Reports', 'Team Collaboration'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Corporate Website Redesign',
      category: 'web',
      description: 'Modern corporate website with CMS and multi-language support',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
      client: 'Global Industries',
      duration: '2 months',
      rating: 5,
      testimonial: 'Professional design that perfectly represents our brand.',
      features: ['Multi-language', 'CMS Integration', 'SEO Optimized', 'Fast Loading'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'FinTech Mobile Platform',
      category: 'mobile',
      description: 'Secure financial services app with biometric authentication',
      image: 'https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Firebase', 'Plaid API', 'Biometric Auth'],
      client: 'SecureBank',
      duration: '8 months',
      rating: 5,
      testimonial: 'Exceeded security requirements while maintaining excellent UX.',
      features: ['Biometric Auth', 'Real-time Transactions', 'Investment Tracking', 'Budget Planning'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our collection of successful projects that have transformed businesses and delighted users worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{project.client}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                      >
                        ×
                      </button>
                      <div className="absolute top-4 left-4 flex space-x-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                      <p className="text-lg text-gray-600 mb-6">{project.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Users className="h-5 w-5 text-blue-600" />
                              <span><strong>Client:</strong> {project.client}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Calendar className="h-5 w-5 text-blue-600" />
                              <span><strong>Duration:</strong> {project.duration}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {project.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Client Testimonial</h3>
                        <p className="text-gray-600 italic">"{project.testimonial}"</p>
                      </div>
                      
                      <div className="flex space-x-4">
                        <a
                          href={project.demoUrl}
                          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span>View Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                        >
                          <Github className="h-5 w-5" />
                          <span>View Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Project Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our portfolio demonstrates consistent delivery of exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '100%', label: 'Client Satisfaction', color: 'from-green-500 to-green-600' },
              { number: '99.9%', label: 'Uptime Average', color: 'from-blue-500 to-blue-600' },
              { number: '45%', label: 'Performance Improvement', color: 'from-purple-500 to-purple-600' },
              { number: '24/7', label: 'Support Coverage', color: 'from-orange-500 to-orange-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-xl p-6"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's create something amazing together. Your project could be our next featured success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;