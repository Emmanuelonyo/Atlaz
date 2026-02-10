"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
  variant: "dark" | "primary" | "light";
}

const testimonials: Testimonial[] = [
  {
    quote:
      "As a new business owner, I was nervous about the registration process, but Atlaz made it completely stress-free. The virtual office service gave us immediate credibility.",
    author: "Magdalene K.",
    role: "Founder, TechSpace Nigeria",
    initials: "MK",
    variant: "dark",
  },
  {
    quote:
      "Atlaz literally saved our launch. They handled our Delaware C-Corp and EIN in record time. We were able to accept US payments just days later. Incredible service!",
    author: "Emmanuel Chike",
    role: "CEO, SwiftPay",
    initials: "EC",
    variant: "primary",
  },
  {
    quote:
      "The entire experience was seamless from start to finish. Every filing was professionally handled, and I didn't have to visit a single government office. Their support is top-notch.",
    author: "Sarah Alfred",
    role: "Co-founder, GreenAgro",
    initials: "SA",
    variant: "light",
  },
  {
    quote:
      "We needed to expand into the US market quickly. Atlaz handled everything - from company formation to getting our EIN. The process was incredibly smooth and professional.",
    author: "David Okonkwo",
    role: "CEO, FinConnect",
    initials: "DO",
    variant: "dark",
  },
  {
    quote:
      "The dedicated support team was always available to answer my questions. They made the complex process of business registration feel simple and straightforward.",
    author: "Amina Bakare",
    role: "Founder, StyleHouse",
    initials: "AB",
    variant: "primary",
  },
  {
    quote:
      "I've recommended Atlaz to multiple founder friends. Their attention to detail and customer service is unmatched in this industry.",
    author: "Kwame Asante",
    role: "CTO, DataFlow",
    initials: "KA",
    variant: "light",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1 text-yellow-400 mb-6">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined text-[20px] drop-shadow-sm">
          star
        </span>
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initials: string;
  variant: "dark" | "primary" | "light";
}

function TestimonialCard({
  quote,
  author,
  role,
  initials,
  variant,
}: TestimonialCardProps) {
  if (variant === "dark") {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative flex flex-col justify-between overflow-hidden group h-full hover:-translate-y-2 transition-transform duration-300 shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-[120px] leading-none">
            format_quote
          </span>
        </div>
        <div>
          <StarRating />
          <p className="text-lg font-medium leading-relaxed mb-8 relative z-10">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold border border-white/20">
            {initials}
          </div>
          <div>
            <h4 className="font-bold text-white">{author}</h4>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "primary") {
    return (
      <div className="bg-primary rounded-3xl p-8 text-white relative flex flex-col justify-between overflow-hidden shadow-xl shadow-primary/20 group h-full hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
        <div>
          <StarRating />
          <p className="text-lg font-bold leading-relaxed mb-8 relative z-10">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="h-12 w-12 rounded-full bg-white text-primary flex items-center justify-center text-xl font-bold">
            {initials}
          </div>
          <div>
            <h4 className="font-bold text-white">{author}</h4>
            <p className="text-sm text-white/80">{role}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 relative flex flex-col justify-between group hover:border-primary/30 transition-colors h-full hover:-translate-y-2 transform duration-300 shadow-xl">
      <div>
        <StarRating />
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold text-gray-600 dark:text-gray-300">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = Math.ceil(testimonials.length / 3);
  const totalMobileSlides = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const nextMobileSlide = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % totalMobileSlides);
  }, [totalMobileSlides]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
      nextMobileSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, nextMobileSlide]);

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleMobileDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setMobileIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="py-16 md:py-24 border-t border-gray-100/50 dark:border-gray-800">
      <div className="flex flex-col gap-4 text-center items-center mb-12">
        <h2 className="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
          Real Founders, Real Results
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-normal max-w-[720px]">
          Businesses like yours trust Atlaz to launch and scale their operations
          globally.
        </p>
      </div>

      {/* Mobile Carousel - 1 card at a time */}
      <div className="md:hidden relative w-full px-4">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="min-h-[320px]">
                  <TestimonialCard {...testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <button
          onClick={() => {
            setIsAutoPlaying(false);
            setMobileIndex((prev) => (prev - 1 + totalMobileSlides) % totalMobileSlides);
            setTimeout(() => setIsAutoPlaying(true), 10000);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200 dark:border-gray-700"
          aria-label="Previous testimonial"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>
        <button
          onClick={() => {
            setIsAutoPlaying(false);
            nextMobileSlide();
            setTimeout(() => setIsAutoPlaying(true), 10000);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200 dark:border-gray-700"
          aria-label="Next testimonial"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>

        {/* Mobile Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleMobileDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === mobileIndex
                  ? "bg-primary w-6"
                  : "bg-gray-300 dark:bg-gray-700 w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Carousel - 3 cards at a time */}
      <div className="hidden md:block relative w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setIsAutoPlaying(false);
            setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
            setTimeout(() => setIsAutoPlaying(true), 10000);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          aria-label="Previous testimonials"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={() => {
            setIsAutoPlaying(false);
            nextSlide();
            setTimeout(() => setIsAutoPlaying(true), 10000);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          aria-label="Next testimonials"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden mx-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="grid grid-cols-3 gap-6 pb-12 w-full flex-shrink-0"
              >
                {testimonials
                  .slice(slideIndex * 3, slideIndex * 3 + 3)
                  .map((testimonial, index) => (
                    <div key={index} className="w-full h-full">
                      <TestimonialCard {...testimonial} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Dots Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-primary"
              }`}
              aria-label={`Go to testimonial slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
