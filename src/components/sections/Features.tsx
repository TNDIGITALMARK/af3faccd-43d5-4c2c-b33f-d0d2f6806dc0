import React from 'react';
import { InsightsIcon, AutomationIcon, SecurityIcon } from '../icons/FeatureIcons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow duration-300">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--card-foreground))]">
        {title}
      </h3>
      <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: <InsightsIcon />,
      title: 'AI-Powered Insights',
      description: 'Harness our advanced analytics to turn raw data into actionable business intelligence',
    },
    {
      icon: <AutomationIcon />,
      title: 'Seamless Automation',
      description: 'Optimize all processes and take enterprise-level efficiency to new heights',
    },
    {
      icon: <SecurityIcon />,
      title: 'Enterprise-Grade Security',
      description: 'Ensure compliance and safeguard to protect your most valuable information',
    },
  ];

  return (
    <section className="bg-[hsl(var(--background))] section-padding">
      <div className="container-zylo">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
            Why Choose Zylo?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
