import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for individual workflows',
    features: [
      'Individual workflow tracking',
      'Basic insights dashboard',
      '1 platform integration',
      'Email support',
      '1 team member'
    ],
    cta: 'Get Started Free',
    popular: false,
    color: 'from-slate-600 to-slate-700'
  },
  {
    name: 'Professional',
    price: '$19',
    period: '/user/month',
    description: 'Ideal for growing teams',
    features: [
      'Team workflow analytics',
      'AI bottleneck predictions',
      'Unlimited integrations',
      'Priority support',
      'Up to 50 team members',
      'Custom dashboards',
      'Slack notifications'
    ],
    cta: 'Start 14-Day Trial',
    popular: true,
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Advanced AI for large organizations',
    features: [
      'Advanced AI insights',
      'SSO integration',
      'Dedicated success manager',
      'Custom workflow rules',
      'Unlimited team members',
      'API access',
      'White-label options'
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-purple-600 to-pink-600'
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
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
            Choose your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">growth plan</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: plan.popular ? 1.02 : 1.01,
                transition: { duration: 0.2 }
              }}
              className={`relative bg-slate-900/50 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-blue-500/50 hover:border-blue-400/50 hover:shadow-blue-500/20 scale-105' 
                  : 'border-slate-700/50 hover:border-slate-600/50 hover:shadow-blue-500/10'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>MOST POPULAR</span>
                  </div>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-400 text-lg">{plan.period}</span>}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-2xl hover:shadow-blue-500/25'
                    : 'border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                {plan.cta}
              </motion.button>

              {plan.name === 'Professional' && (
                <p className="text-center text-slate-400 text-sm mt-3">
                  No credit card required
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white">Enterprise Ready</h3>
            </div>
            <p className="text-slate-300 mb-6">
              All plans include enterprise-grade security, 99.9% uptime SLA, and GDPR compliance. 
              Need custom integrations or on-premise deployment? Let's talk.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200"
            >
              Schedule a Demo →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};