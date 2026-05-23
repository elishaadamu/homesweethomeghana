"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MdLocalBar, MdMessage, MdEmojiEvents, MdLocationOn, MdPeople, MdHandshake, MdMenuBook, MdFavoriteBorder, MdLocalHospital } from "react-icons/md";

const tabs = [
  {
    id: "social",
    label: "Social Club",
    icon: MdLocalBar,
    activities: [
      { Icon: MdLocalBar, title: "Fun Friday Gatherings", desc: "Monthly social mixers and cultural celebrations with food, music, and fun." },
      { Icon: MdMessage, title: "Chill & Chat Sessions", desc: "Relaxed networking events for members to connect and share ideas." },
      { Icon: MdEmojiEvents, title: "Sports & Fitness", desc: "Group sports activities, fitness challenges, and wellness programmes." },
      { Icon: MdLocationOn, title: "Family Leisure Excursions", desc: "Cultural outings, trips, and family-friendly leisure activities." },
      { Icon: MdPeople, title: "Pop-Up Networking Centres", desc: "Spontaneous networking hubs that spark new connections and collaborations." },
    ],
  },
  {
    id: "charity",
    label: "Charity & Service",
    icon: MdHandshake,
    activities: [
      { Icon: MdHandshake, title: "Time with Disabled", desc: "Outreach programmes visiting and supporting persons living with disabilities." },
      { Icon: MdMenuBook, title: "School & Hospital Support", desc: "Visits and donations to schools, hospitals, and orphanages across Ghana." },
      { Icon: MdLocalHospital, title: "Health Initiatives", desc: "Community health drives, screenings, and medical support programmes." },
      { Icon: MdMenuBook, title: "Educational Support", desc: "Scholarships, supplies, and mentorship for underprivileged students." },
      { Icon: MdFavoriteBorder, title: "Spiritual Hour", desc: "Sessions of prayer, encouragement, and emotional support for the community." },
    ],
  },
];

const cardColors = ["#002576", "#00c2cc", "#fbd124", "#002576", "#00c2cc"];

export default function Activities() {
  const [active, setActive] = useState("social");
  const tab = tabs.find((t) => t.id === active)!;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Dragging states
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  // Reset scroll position and active index when tab changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
    setActiveIndex(0);
  }, [active]);

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
        tab.activities.length - 1,
        Math.max(0, Math.round((scrollLeft / maxScroll) * (tab.activities.length - 1)))
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
      const targetScroll = (index / (tab.activities.length - 1)) * maxScroll;
      carouselRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section id="activities" className="bg-hsh-off-white py-12 px-6 scroll-mt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[7rem] font-black text-black/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
            ACTIVITIES
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-hsh-orange relative z-10">What We Do</p>
          <h2 className="font-outfit text-5xl md:text-6xl font-black text-hsh-dark-text mt-2 mb-4 relative z-10">
            Our <span className="section-title-highlight">Activities</span>
          </h2>
          <p className="text-lg text-hsh-muted leading-relaxed max-w-2xl mx-auto relative z-10">
            From social gatherings to humanitarian outreach, there is something meaningful for every member.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((t) => {
            const TabIcon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2.5 px-8 py-3 rounded-xl border-0 cursor-pointer font-outfit font-bold text-base transition-all duration-300 ${
                  active === t.id
                    ? "bg-hsh-navy text-white shadow-lg"
                    : "bg-white text-hsh-muted shadow-sm hover:shadow-md"
                }`}
              >
                <TabIcon size={20} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Banner Image */}
        <div className="w-full h-64 md:h-[400px] relative rounded-[2rem] overflow-hidden mb-16 shadow-lg border border-black/5 max-w-5xl mx-auto">
          <Image
            src={active === "social" ? "/social_club.png" : "/charity_service.png"}
            alt={tab.label}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-8 md:bottom-10 md:left-12">
            <h3 className="text-white font-outfit font-black text-3xl md:text-4xl">{tab.label}</h3>
          </div>
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
            {tab.activities.map((act, i) => {
              const IconComponent = act.Icon;
              const color = cardColors[i % cardColors.length];
              return (
                <div
                  key={act.title}
                  className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-hsh-navy/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm shrink-0 pointer-events-none"
                    style={{ background: `${color}12`, color: color }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-outfit font-black text-lg text-hsh-navy mb-2 leading-tight pointer-events-none">
                    {act.title}
                  </h3>
                  
                  <p className="text-hsh-muted text-sm leading-relaxed font-inter max-w-[240px] pointer-events-none">
                    {act.desc}
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
          {tab.activities.map((_, i) => (
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
