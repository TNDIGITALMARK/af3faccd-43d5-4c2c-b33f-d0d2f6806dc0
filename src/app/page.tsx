import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Solutions } from '@/components/sections/Solutions';

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}