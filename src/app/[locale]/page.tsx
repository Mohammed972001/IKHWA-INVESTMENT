'use client';

import { lazy, Suspense } from 'react';
import Hero from '@/components/Home/Hero';

// Lazy load components below the fold
const AboutUs = lazy(() => import('@/components/Home/AboutUs'));
const OurServices = lazy(() => import('@/components/Home/OurServices'));
const OurCommitment = lazy(() => import('@/components/Home/OurCommitment'));
const Partners = lazy(() => import('@/components/Home/Partners'));
const FAQs = lazy(() => import('@/components/Home/FAQs'));
const ContactUs = lazy(() => import('@/components/Home/ContactUs'));

// Loading placeholder component
const SectionSkeleton = () => (
  <div className="w-full py-20 animate-pulse">
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
        ))}
      </div>
    </div>
  </div>
);

export default function TestPage() {
  return (
    <div className="min-h-screen">
      {/* Hero loads immediately - critical for LCP */}
      <Hero />

      {/* All other sections are lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <OurCommitment />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <OurServices />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Partners />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FAQs />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ContactUs />
      </Suspense>
    </div>
  );
}