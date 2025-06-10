import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Network, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Predictive Intelligence',
    description: 'AI forecasts bottlenecks 48-72 hours ahead',
    demo: 'Timeline visualization showing predictive insights',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Zero-Setup Discovery',
    description: 'Automatically maps your existing workflows',
    demo: 'Interactive workflow mapping in real-time',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Network,
    title: 'Cross-Platform Insights',
    description: 'Unified view across all your tools',
    demo: 'Dashboard integrating 200+ platforms',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Users,
    title: 'Collaborative Optimization',
    description: 'Team-based workflow improvements',
    demo: 'Real-time team performance metrics',
    color: 'from-orange-500 to-red-500'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Intelligence that <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">adapts to your team</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Four core capabilities that transform reactive teams into predictive powerhouses
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-300 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Demo Preview */}
                <div className="bg-slate-800/50 border border-slate-700/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">Live Demo</span>
                  </div>
                  <p className="text-sm text-slate-300">{feature.demo}</p>
                  
                  {/* Animated progress bar */}
                  <div className="mt-3 w-full bg-slate-700 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${70 + index * 10}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`bg-gradient-to-r ${feature.color} h-1 rounded-full`}
                    />
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <span>Explore Feature</span>
                  <motion.div
                    className="w-4 h-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            See All Features in Action
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};