import React from 'react';
import { Button } from '../ui/Button';

export const Solutions: React.FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-zylo">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Our Solutions
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            From raw data to optimized workflows
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Solution Flow Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex-1 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[hsl(var(--accent)/0.1)] flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]"></div>
              </div>
              <h4 className="font-semibold text-[hsl(var(--card-foreground))]">Data Collection</h4>
            </div>

            <div className="hidden md:block text-[hsl(var(--accent))]">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <path d="M0 12H38M38 12L28 2M38 12L28 22" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <div className="flex-1 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[hsl(var(--accent)/0.1)] flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]"></div>
              </div>
              <h4 className="font-semibold text-[hsl(var(--card-foreground))]">AI Analysis</h4>
            </div>

            <div className="hidden md:block text-[hsl(var(--accent))]">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <path d="M0 12H38M38 12L28 2M38 12L28 22" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <div className="flex-1 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[hsl(var(--accent)/0.1)] flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]"></div>
              </div>
              <h4 className="font-semibold text-[hsl(var(--card-foreground))]">Integration</h4>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Ready to Elevate Your Business?
          </h3>
          <Button variant="primary">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};
