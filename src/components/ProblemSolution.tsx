import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-red-400 mb-4">
              <AlertTriangle className="w-12 h-12" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The Hidden Cost of <span className="text-red-400">Workflow Chaos</span>
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-red-500/10 border border-red-500/20 rounded-xl p-6"
              >
                <div className="text-4xl font-bold text-red-400 mb-2">73%</div>
                <p className="text-slate-300">of teams miss deadlines due to unexpected bottlenecks</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 text-slate-300">
                  <Clock className="w-5 h-5 text-red-400" />
                  <span>Teams waste 21% of their time on preventable delays</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span>Critical issues discovered too late to prevent impact</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <TrendingUp className="w-5 h-5 text-red-400" />
                  <span>Productivity drops 40% during crunch periods</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-emerald-400 mb-4">
              <CheckCircle className="w-12 h-12" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Intelligent Prevention, <span className="text-emerald-400">Not Reaction</span>
            </h2>

            {/* Interactive Dashboard Preview */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Workflow Health Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-emerald-400">Live</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">34%</div>
                  <div className="text-xs text-slate-400">Faster Delivery</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">48h</div>
                  <div className="text-xs text-slate-400">Early Warning</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Sprint Velocity</span>
                  <span className="text-emerald-400">+23%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '78%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                  />
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-400">Predicted Issue</span>
                </div>
                <p className="text-xs text-slate-300">API bottleneck detected in 48 hours. Suggested action: Scale infrastructure.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-emerald-400 mb-2">89%</div>
              <p className="text-slate-300">reduction in surprise delays with FlowForge</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};