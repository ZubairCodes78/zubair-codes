import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Stats from '@/components/sections/Stats';
import UseCases from '@/components/sections/UseCases';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Demo from '@/components/sections/Demo';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <HowItWorks />
      <Stats />
      <UseCases />
      <BeforeAfter />
      <Demo />
      <Testimonials />
      <CTA />
    </main>
  );
}
