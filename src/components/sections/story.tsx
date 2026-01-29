"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LabButton } from "@/components/ui/LabButton";

export function Story() {
  return (
    <section className="py-28 bg-lab-black relative overflow-hidden">
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Column */}
        <div className="space-y-8 order-2 lg:order-1">
          <div>
            <h2 className="text-lab-toxic font-mono text-sm tracking-[0.3em] mb-4">
              {"// ORIGIN_STORY"}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-heading uppercase leading-tight">
              The Origin of the <br />
              <span className="text-lab-yellow">Experiment</span>
            </h3>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              It started with a hypothesis: <span className="text-white font-bold">Can fast food be scientifically perfect?</span>
            </p>
            <p>
              At Lab Station, we don&apos;t just &quot;cook&quot;. We engineer flavor profiles. 
              Founded by <span className="text-lab-yellow">Moudi Food</span>, our laboratory is dedicated to the pursuit of the ultimate taste sensation.
            </p>
            <p>
              Our primary variable? <span className="text-lab-toxic">100% Fresh Meat.</span> No frozen samples. No compromises. 
              Every burger is a calculated masterpiece, every taco a chemical bond of deliciousness.
            </p>
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-2 border-lab-grey pl-4">
              <div className="text-lab-yellow font-mono text-xl font-bold">2023</div>
              <div className="text-sm text-gray-500">Hypothesis Formulated</div>
            </div>
            <div className="border-l-2 border-lab-grey pl-4">
              <div className="text-lab-toxic font-mono text-xl font-bold">100%</div>
              <div className="text-sm text-gray-500">Fresh Ingredients</div>
            </div>
          </div>

          <div className="pt-4">
            <LabButton variant="outline">
              VIEW FULL ARCHIVES
            </LabButton>
          </div>
        </div>

        {/* Character Column */}
        <div className="relative order-1 lg:order-2 h-[500px] flex items-center justify-center">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-lab-yellow/5 to-transparent rounded-full blur-3xl opacity-30" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
             {/* Grid Pattern Overlay */}
             <div className="absolute inset-0 opacity-20 z-0" 
                  style={{ backgroundImage: 'radial-gradient(#ffd700 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
             />

            {/* Thinking Character Image */}
            <Image
              src="/images/Thinking_wb.png"
              alt="Scientist Thinking"
              fill
              className="object-contain relative z-10 drop-shadow-2xl"
            />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-lab-dark/80 backdrop-blur border border-lab-toxic/30 p-4 rounded-lg z-20 shadow-xl"
            >
              <div className="text-lab-toxic font-mono text-xs">STATUS</div>
              <div className="text-white font-bold">CALCULATING...</div>
            </motion.div>
          </motion.div>
        </div>



      </div>
    </section>
  );
}
