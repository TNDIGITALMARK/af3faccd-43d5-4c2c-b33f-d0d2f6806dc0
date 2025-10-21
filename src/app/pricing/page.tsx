import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export const dynamic = 'force-dynamic';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingPage() {
  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 users',
        'Basic automation workflows',
        '10 GB storage',
        'Email support',
        'Mobile apps',
        'Core integrations'
      ]
    },
    {
      name: 'Professional',
      price: '$79',
      description: 'For growing teams that need more power',
      features: [
        'Up to 25 users',
        'Advanced workflow automation',
        '100 GB storage',
        'Priority support',
        'Mobile apps',
        'Advanced integrations',
        'Custom reporting',
        'API access'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited users',
        'Custom integrations',
        'Unlimited storage',
        '24/7 dedicated support',
        'Mobile apps',
        'Advanced security features',
        'Custom onboarding',
        'SLA guarantee'
      ]
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the perfect plan for your team. All plans include a 14-day free trial with no credit card required.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-[hsl(var(--background))] section-padding">
          <div className="container-zylo">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-8 flex flex-col ${
                    tier.highlighted
                      ? 'ring-2 ring-[hsl(var(--accent))] relative transform md:-translate-y-2'
                      : ''
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[hsl(var(--accent))] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-[hsl(var(--foreground))]">
                      {tier.name}
                    </h3>
                    <p className="text-[hsl(var(--muted-foreground))] mb-4">
                      {tier.description}
                    </p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-[hsl(var(--foreground))]">
                        {tier.price}
                      </span>
                      {tier.price !== 'Custom' && (
                        <span className="text-[hsl(var(--muted-foreground))]">/month</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-[hsl(var(--accent))] mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-[hsl(var(--card-foreground))]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.highlighted ? 'primary' : 'secondary'}
                    className={
                      !tier.highlighted
                        ? '!bg-white !text-[hsl(var(--accent))] !border-2 !border-[hsl(var(--accent))] hover:!bg-[hsl(var(--accent)/0.05)]'
                        : 'w-full'
                    }
                  >
                    {tier.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white section-padding">
          <div className="container-zylo max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[hsl(var(--foreground))]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: 'Can I change plans later?',
                  answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and offer invoicing for annual Enterprise plans.'
                },
                {
                  question: 'Is there a long-term contract?',
                  answer: 'No, all plans are month-to-month with no long-term commitment required. You can cancel anytime.'
                },
                {
                  question: 'Do you offer discounts for annual billing?',
                  answer: 'Yes! Save 20% when you pay annually. Contact our sales team for more information.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-[hsl(var(--muted))] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--foreground))]">
                    {faq.question}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-[hsl(var(--background))] section-padding">
          <div className="container-zylo max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
                Have Questions? Let's Talk
              </h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))]">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <form className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[hsl(var(--card-foreground))] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.2)] focus:border-[hsl(var(--accent))] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--card-foreground))] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.2)] focus:border-[hsl(var(--accent))] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[hsl(var(--card-foreground))] mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.2)] focus:border-[hsl(var(--accent))] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-[hsl(var(--card-foreground))] mb-2">
                  Team Size *
                </label>
                <select
                  id="teamSize"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.2)] focus:border-[hsl(var(--accent))] transition-colors"
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 people</option>
                  <option value="6-25">6-25 people</option>
                  <option value="26-100">26-100 people</option>
                  <option value="100+">100+ people</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--card-foreground))] mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.2)] focus:border-[hsl(var(--accent))] transition-colors resize-none"
                />
              </div>

              <Button variant="primary" type="submit" className="w-full">
                Send Message
              </Button>

              <p className="text-sm text-center text-[hsl(var(--muted-foreground))]">
                Thanks, we'll be in touch soon!
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
