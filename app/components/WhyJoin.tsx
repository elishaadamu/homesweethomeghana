"use client";

import React, { useRef, useState, useEffect } from "react";
import { MdHandshake, MdPeopleAlt, MdLightbulb, MdFavorite, MdStars, MdPublic } from "react-icons/md";

const benefits = [
  { Icon: MdHandshake, title: "Genuine Friendships", desc: "Build real, lasting friendships with like-minded Ghanaians across the world." },
  { Icon: MdPeopleAlt, title: "Professional Network", desc: "Connect with entrepreneurs, professionals, and industry leaders." },
  { Icon: MdLightbulb, title: "Exchange Ideas", desc: "Learn from diverse experiences and broaden your perspective." },
  { Icon: MdFavorite, title: "Charity Impact", desc: "Participate in meaningful charity projects that change lives." },
  { Icon: MdStars, title: "Cultural Events", desc: "Attend exciting social, cultural, and recreational events." },
  { Icon: MdPublic, title: "Global Community", desc: "Be part of a positive, supportive, purpose-driven Ghanaian family worldwide." },
];

const colors = ["#002576", "#00c2cc", "#fbd124", "#002576", "#00c2cc", "#fbd124"];

export default function WhyJoin() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Dragging states
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  // Auto-scroll logic (5s interval)
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && !isDown.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        const cardWidth = clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
        
        // Loop back to start if at the end
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollTo({ left: scrollLeft + cardWidth, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Track active slide based on scroll position
  const handleScrollEvent = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
      const cardWidth = clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
      
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      
      // Map scroll progress to dots range
      const idx = Math.min(
        benefits.length - 1,
        Math.max(0, Math.round((scrollLeft / maxScroll) * (benefits.length - 1)))
      );
      setActiveIndex(idx);
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "auto"; // Instant movement during drag
      startX.current = e.pageX - carouselRef.current.offsetLeft;
      scrollLeftVal.current = carouselRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    if (carouselRef.current) {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5; // Drag speed multiplier
      carouselRef.current.scrollLeft = scrollLeftVal.current - walk;
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const cardWidth = clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
      carouselRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const { clientWidth, scrollWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const targetScroll = (index / (benefits.length - 1)) * maxScroll;
      carouselRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section id="why-join" className="bg-hsh-off-white py-12 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[7rem] font-black text-black/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
            BENEFITS
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-hsh-cyan relative z-10 font-outfit">Benefits</p>
          <h2 className="font-outfit text-5xl md:text-6xl font-black text-hsh-dark-text mt-2 mb-4 relative z-10">
            Why Join HSH <span className="section-title-highlight">Network?</span>
          </h2>
          <p className="text-lg text-hsh-muted leading-relaxed max-w-2xl mx-auto relative z-10 font-inter">
            Members enjoy a wealth of opportunities that enrich their personal, professional, and community life.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-12 group">
          {/* Scrollable track */}
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScrollEvent}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-6 pb-6 w-full cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none" }}
          >
            {benefits.map((benefit, i) => {
              const BenefitIcon = benefit.Icon;
              const color = colors[i % colors.length];
              return (
                <div
                  key={benefit.title}
                  className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-hsh-navy/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm shrink-0 pointer-events-none"
                    style={{ background: `${color}12`, color: color }}
                  >
                    <BenefitIcon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-outfit font-black text-lg text-hsh-navy mb-2 leading-tight pointer-events-none">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-hsh-muted text-sm leading-relaxed font-inter max-w-[240px] pointer-events-none">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-hsh-navy flex items-center justify-center shadow-lg border border-hsh-navy/5 hover:bg-hsh-navy hover:text-white transition duration-300 pointer-events-auto z-20 cursor-pointer"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-hsh-navy flex items-center justify-center shadow-lg border border-hsh-navy/5 hover:bg-hsh-navy hover:text-white transition duration-300 pointer-events-auto z-20 cursor-pointer"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>

        {/* Premium Indicator Dot Bar */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {benefits.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "bg-hsh-cyan w-6"
                  : "bg-hsh-navy/20 hover:bg-hsh-navy/40 w-2.5"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
