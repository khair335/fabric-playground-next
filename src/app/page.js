import AboutUs from '@/components/Home/AboutUs';
import Features from '@/components/Home/Features';
import Hero from '@/components/Home/Hero';
import Pricing from '@/components/Home/Pricing';
import WhyUs from '@/components/Home/WhyUs';
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero />
    <Features />
      <WhyUs />
      <Pricing />
      <AboutUs />
   </div>
  );
}
