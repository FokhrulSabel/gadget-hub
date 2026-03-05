import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HeroSection from "@/components/sections/HeroSection";
import PromoBanner from "@/components/sections/PromoBanner";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts/>
      <CategoriesSection />
      <WhyChooseUs />
      <Testimonials />
      <PromoBanner />
    </>
  );
}
