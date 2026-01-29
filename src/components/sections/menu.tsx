"use client";

import { useState } from "react";
import { getItemsByCategory, MenuItem } from "@/lib/menu-data";
import { ExperimentList } from "@/components/menu/experiment-list";
import { ExperimentVisualizer } from "@/components/menu/experiment-visualizer";
import { ProductDrawer } from "@/components/menu/product-drawer";
import { cn } from "@/lib/utils";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<"burger" | "taco">("burger");
  const items = getItemsByCategory(activeCategory);
  const [activeItem, setActiveItem] = useState<MenuItem>(items[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCategoryChange = (category: "burger" | "taco") => {
    setActiveCategory(category);
    // Reset active item to first of new category
    const newItems = getItemsByCategory(category);
    setActiveItem(newItems[0]);
    setIsDrawerOpen(false);
  };

  const handleProductSelect = (item: MenuItem) => {
    setActiveItem(item);
    // Open drawer on mobile when product is tapped
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsDrawerOpen(true);
    }
  };

  return (
    <section id="menu" className="py-32 min-h-screen bg-lab-black relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-lab-toxic font-mono text-sm tracking-[0.3em]">
            {"// ARCHIVES"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white font-heading uppercase">
            The <span className="text-lab-yellow">Experiments</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore our latest culinary prototypes. Data extracted from the Lab Station database.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {(["burger", "taco"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-6 md:px-8 py-3 rounded-full font-heading uppercase tracking-wider text-xs md:text-sm transition-all duration-300 border",
                activeCategory === cat
                  ? "bg-lab-yellow text-lab-black border-lab-yellow shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                  : "bg-transparent text-gray-500 border-lab-grey hover:border-lab-yellow/50 hover:text-white"
              )}
            >
              {cat === "burger" ? "Prototypes" : "Compounds"}
              <span className="hidden md:inline"> ({cat === "burger" ? "Burgers" : "Tacos"})</span>
            </button>
          ))}
        </div>

        {/* Mobile Hint */}
        <p className="text-center text-gray-500 text-sm mb-6 lg:hidden">
          Tap an item to see details
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: List (Scrollable) */}
          <div className="lg:col-span-5 lg:h-[600px] lg:overflow-y-auto lg:pr-2 custom-scrollbar">
            <ExperimentList 
              items={items} 
              activeItem={activeItem} 
              onSelect={handleProductSelect} 
            />
          </div>

          {/* Right: Visualizer (Sticky) - Desktop Only */}
          <div className="hidden lg:block lg:col-span-7 sticky top-24">
            <ExperimentVisualizer 
              activeItem={activeItem} 
              category={activeCategory} 
            />
          </div>

        </div>
      </div>

      {/* Mobile Product Drawer */}
      <ProductDrawer 
        item={activeItem}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
}

