import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP Engineering',
    company: 'TechCorp',
    quote: 'FlowForge predicted our sprint bottleneck 3 days early. We shipped on time for the first time in months.',
    image: '/api/placeholder/64/64',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager',
    company: 'DataFlow',
    quote: 'The AI insights helped us identify workflow inefficiencies we never knew existed. 40% productivity boost.',
    image: '/api/placeholder/64/64',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'CTO',
    company: 'CloudSys',
    quote: 'Game-changing platform. Our development velocity increased by 35% within the first month of implementation.',
    image: '/api/placeholder/64/64',
    rating: 5
  }
];

const metrics = [
  { value: '34%', label: 'Faster Delivery', color: 'text-emerald-400' },
  { value: '89%', label: 'Reduction in Delays', color: 'text-blue-400' },
  { value: '48h', label: 'Early Predictions', color: 'text-cyan-400' },
  { value: '10K+', label: 'Teams Served', color: 'text-purple-400' }
];

export const SocialProof: React.FC = () => {
  return (
    <section id="customers" className="py-24 relative">
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
            Trusted by <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">industry leaders</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join thousands of teams already transforming their workflows with FlowForge
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-4xl sm:text-5xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-center text-slate-400 text-sm mb-8 uppercase tracking-wide">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 items-center opacity-60">
            {['TechCorp', 'DataFlow', 'CloudSys', 'InnovateLabs', 'DevStream'].map((company, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-center transition-all duration-300"
              >
                <div className="w-32 h-16 bg-slate-800/50 rounded-lg mx-auto flex items-center justify-center border border-slate-700/30">
                  <span className="text-sm font-medium text-slate-400">{company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 relative group hover:border-slate-600/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-blue-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-300 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 mb-6">Join these industry leaders in transforming your workflows</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};