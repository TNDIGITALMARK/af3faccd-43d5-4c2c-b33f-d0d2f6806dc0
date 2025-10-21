import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export const dynamic = 'force-dynamic';

export default function FeaturesPage() {
  const detailedFeatures = [
    {
      title: 'Smart Task Automation',
      description: 'Reduce time spent on administrative tasks by up to 60% while maintaining clear project visibility.',
      capabilities: [
        'Automatic task assignment based on team capacity and skills',
        'Smart deadline suggestions using historical data',
        'Trigger-based workflow automation',
        'Intelligent notification routing'
      ],
      demo: {
        task: 'Review client proposal',
        trigger: 'Automatically sends notification to team lead',
        users: ['Sarah (Designer)', 'Mike (Developer)']
      }
    },
    {
      title: 'Real-time Collaboration',
      description: 'Seamless collaboration tools that eliminate productivity bottlenecks and keep teams aligned.',
      capabilities: [
        'Live cursor tracking for simultaneous editing',
        'In-context comments and feedback',
        'Real-time status updates across all team members',
        'Integrated video and chat communication'
      ],
      demo: {
        users: ['Sarah (Designer)', 'Mike (Developer)'],
        feature: 'Live cursor tracking and real-time updates'
      }
    },
    {
      title: 'Progress Analytics',
      description: 'Comprehensive insights into team performance and project health with actionable metrics.',
      capabilities: [
        'Visual dashboard with key performance indicators',
        'Customizable reports and export options',
        'Trend analysis and predictive insights',
        'Team efficiency scoring and recommendations'
      ],
      metrics: {
        tasksCompleted: 247,
        timeSaved: '18 hours',
        teamEfficiency: '92%'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-[hsl(var(--navy-primary))] text-white section-padding">
          <div className="container-zylo text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Modern Teams
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover how Zylo's intelligent automation and seamless collaboration tools transform the way your team works
            </p>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="bg-[hsl(var(--background))] section-padding">
          <div className="container-zylo">
            <div className="space-y-24">
              {detailedFeatures.map((feature, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {feature.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-start">
                          <svg className="w-6 h-6 text-[hsl(var(--accent))] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[hsl(var(--card-foreground))]">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Demo/Visualization */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-8">
                      {feature.demo && (
                        <div className="space-y-4">
                          <div className="bg-[hsl(var(--accent)/0.1)] rounded-lg p-4">
                            <p className="font-semibold text-[hsl(var(--card-foreground))] mb-2">Demo Task:</p>
                            <p className="text-[hsl(var(--muted-foreground))]">{feature.demo.task}</p>
                          </div>
                          {feature.demo.trigger && (
                            <div className="flex items-center justify-center py-2">
                              <svg className="w-6 h-6 text-[hsl(var(--accent))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                            </div>
                          )}
                          {feature.demo.users && (
                            <div className="bg-[hsl(var(--muted))] rounded-lg p-4">
                              <p className="font-semibold text-[hsl(var(--card-foreground))] mb-2">Team Members:</p>
                              <div className="space-y-2">
                                {feature.demo.users.map((user, userIndex) => (
                                  <div key={userIndex} className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))] mr-3"></div>
                                    <span className="text-[hsl(var(--muted-foreground))]">{user}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {feature.metrics && (
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="bg-[hsl(var(--accent)/0.1)] rounded-lg p-4">
                            <div className="text-3xl font-bold text-[hsl(var(--accent))] mb-1">
                              {feature.metrics.tasksCompleted}
                            </div>
                            <div className="text-sm text-[hsl(var(--muted-foreground))]">Tasks Completed</div>
                          </div>
                          <div className="bg-[hsl(var(--accent)/0.1)] rounded-lg p-4">
                            <div className="text-3xl font-bold text-[hsl(var(--accent))] mb-1">
                              {feature.metrics.timeSaved}
                            </div>
                            <div className="text-sm text-[hsl(var(--muted-foreground))]">Time Saved</div>
                          </div>
                          <div className="bg-[hsl(var(--accent)/0.1)] rounded-lg p-4">
                            <div className="text-3xl font-bold text-[hsl(var(--accent))] mb-1">
                              {feature.metrics.teamEfficiency}
                            </div>
                            <div className="text-sm text-[hsl(var(--muted-foreground))]">Team Efficiency</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white section-padding">
          <div className="container-zylo text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using Zylo to boost productivity and streamline collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">Start Free Trial</Button>
              <Button variant="secondary" className="!bg-white !text-[hsl(var(--accent))] !border-[hsl(var(--accent))] hover:!bg-[hsl(var(--accent)/0.05)]">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
