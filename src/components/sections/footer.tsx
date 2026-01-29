"use client";
import { MapPin, Phone, Instagram, Facebook, ArrowUp } from "lucide-react";
import { LabButton } from "@/components/ui/LabButton";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] text-gray-400 py-20 border-t border-lab-grey/30 relative overflow-hidden">
      {/* Hazard Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-hazard-stripes opacity-20" />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading tracking-tighter">
            LAB <span className="text-lab-yellow">STATION</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Benna Scientifiquement Prouvée. <br />
            The ultimate taste experiment in Ariana.
          </p>
          <div className="text-xs text-gray-600 font-mono pt-4">
            © 2026 LAB STATION. <br />
            ALL EXPERIMENTS VERIFIED.
          </div>
        </div>

        {/* Contact Protocols */}
        <div className="space-y-4">
          <h4 className="text-lab-toxic font-mono text-xs tracking-widest uppercase mb-2">
            {"// CONTACT_PROTOCOLS"}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a 
                href="https://maps.google.com/?q=Av.+Hédi+Nouira,+Ariana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 mt-1 text-lab-yellow group-hover:text-lab-toxic transition-colors" />
                <span>Av. Hédi Nouira, <br /> Ariana, Tunisie</span>
              </a>
            </li>
            <li>
              <a 
                href="tel:+21621722108" 
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-lab-yellow group-hover:text-lab-toxic transition-colors" />
                <span>+216 21 722 108</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social Uplink */}
        <div className="space-y-4">
          <h4 className="text-lab-toxic font-mono text-xs tracking-widest uppercase mb-2">
            {"// SOCIAL_UPLINK"}
          </h4>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/labstation_tn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-lab-dark border border-lab-grey flex items-center justify-center hover:border-lab-yellow hover:text-lab-yellow transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-lab-dark border border-lab-grey flex items-center justify-center hover:border-lab-yellow hover:text-lab-yellow transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* System Actions */}
        <div className="space-y-4 flex flex-col items-start lg:items-end">
          <h4 className="text-lab-toxic font-mono text-xs tracking-widest uppercase mb-2">
            {"// SYSTEM_ACTIONS"}
          </h4>
          <LabButton 
            onClick={scrollToTop}
            variant="outline" 
            className="gap-2 group"
          >
            RESTART LOOP
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </LabButton>
        </div>

      </div>
    </footer>
  );
}
