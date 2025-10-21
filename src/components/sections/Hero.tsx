import React from 'react';
import { Button } from '../ui/Button';
import { NetworkVisualization } from '../icons/FeatureIcons';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[hsl(var(--navy-primary))] text-white relative overflow-hidden">
      <div className="container-zylo section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Data into Intelligent Action
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Unlock the power of your enterprise data and AI-driven insights and automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">
                Request a Demo
              </Button>
              <Button variant="secondary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Network Visualization */}
          <div className="relative h-[400px] hidden lg:block">
            <NetworkVisualization />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-primary))] to-[hsl(var(--navy-secondary))] pointer-events-none" />
    </section>
  );
};
