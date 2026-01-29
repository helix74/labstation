"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Send, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Av. Hédi Nouira, Ariana",
    href: "https://maps.google.com/?q=Av.+Hédi+Nouira,+Ariana,+Tunisie",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+216 21 722 108",
    href: "tel:+21621722108",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "12h - 23h, 7j/7",
    href: null,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@labstation_tn",
    href: "https://instagram.com/labstation_tn",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", phone: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ffd700]/5 rounded-full blur-[150px]" />

      <div className="container relative z-10 max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#ffd700]">📍 Nous</span>{" "}
            <span className="text-white">Trouver</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Venez tester nos formules au laboratoire. The Lab is Working! 🥼
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards - 2x2 Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-2xl p-6 lg:p-8 hover:border-[#ffd700]/40 transition-all duration-300 group h-full"
                    >
                      <ContactCardContent info={info} />
                    </a>
                  ) : (
                    <div className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-2xl p-6 lg:p-8 h-full">
                      <ContactCardContent info={info} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Real Google Maps Embed */}
            <div className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-2xl overflow-hidden h-64 md:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5!2d10.1644!3d36.8628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzQ2LjEiTiAxMMKwMDknNTEuOCJF!5e0!3m2!1sfr!2stn!4v1600000000000!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lab Station Location - Ariana, Tunisia"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffd700]/5 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#ffd700]/10 flex items-center justify-center">
                    🧪
                  </span>
                  Envoyer un Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#00ff41]/10 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-[#00ff41]" />
                    </div>
                    <p className="text-2xl font-bold text-white mb-2">
                      Message Envoyé! 🎉
                    </p>
                    <p className="text-gray-400">
                      On vous répond très vite. Benna garantie!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl bg-[#1a1a1a] border-2 border-[#2a2a2a] text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ffd700] transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl bg-[#1a1a1a] border-2 border-[#2a2a2a] text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ffd700] transition-colors"
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl bg-[#1a1a1a] border-2 border-[#2a2a2a] text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ffd700] transition-colors resize-none"
                        placeholder="Votre message..."
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full text-base">
                      <Send size={18} />
                      Lancer le Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCardContent({
  info,
}: {
  info: (typeof contactInfo)[0];
}) {
  return (
    <>
      <div className="w-12 h-12 rounded-xl bg-[#ffd700]/10 flex items-center justify-center mb-4">
        <info.icon className="w-6 h-6 text-[#ffd700]" />
      </div>
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
        {info.label}
      </p>
      <p className="text-white font-medium group-hover:text-[#ffd700] transition-colors">
        {info.value}
      </p>
    </>
  );
}
