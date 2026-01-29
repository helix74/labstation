import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/menu";
import { Story } from "@/components/sections/story";
import { Testimonials } from "@/components/sections/testimonials";
import { VideoBanner } from "@/components/sections/video-banner";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { WelcomeOverlay } from "@/components/ui/WelcomeOverlay";

export default function Home() {
  return (
    <main className="min-h-screen bg-lab-black text-white selection:bg-lab-yellow selection:text-black">
      <WelcomeOverlay />
      <Hero />
      <Menu />
      <Testimonials />
      <Story />
      <VideoBanner />
      <Contact />
      <Footer />
    </main>
  );
}
