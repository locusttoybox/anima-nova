"use client";

import { useRef, useEffect, useState } from "react";
import Hero from "@/assets/hero.jpg";
import Image from "next/image";
import CTAbutton from "@/components/CTAbutton";
import heroData from "@/data/heroData";
import manifestoData from "@/data/manifestoData";
import approachData from "@/data/approachData";
import instrumentsData from "@/data/instruments";
import CarouselCard from "@/components/CarouselCard";
import ArrowIcon from "@/components/ArrowIcon";
import aboutContentData from "@/data/aboutContentData";
import callToActionData from "@/data/callToActionData";

export default function Home() {
  const { heroTitle, subTitle } = heroData;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to show/hide arrows dynamically
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? 500 : 300;
      const move = direction === "left" ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: move, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <main>
      <section className="relative w-screen h-screen overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-5">
        <div className="absolute inset-0 z-0">
          <Image
            src={Hero}
            alt="Hero image"
            fill
            priority
            className="object-cover transparent-[80%]"
          />

          <div className="relative z-10 max-w-6xl mx-auto h-full px-4 flex flex-col justify-center items-start gap-7">
            <div className="relative z-10 flex">
              <div className="max-w-3xl">
                <h1 className="lg:text-7xl text-6xl mt-6 font-normal leading-20 text-gray-800">
                  {heroTitle}
                </h1>
              </div>
            </div>
            <div className="relative z-10 flex">
              <div className="max-w-4xl">
                <h2 className="lg:text-2xl text-1xl font-normal text-gray-800 leading-7 lg:leading-10">
                  {heroData.subTitle}
                </h2>
              </div>
            </div>
            <CTAbutton>Pieteikties Nodarbību Ciklam</CTAbutton>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-24 lg:py-36 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl text-gray-800">
            {manifestoData.sectionTitle}
          </h3>
          <div className="space-y-6 text-xl text-gray-700 leading-relaxed font-light"></div>
          <p className="text-2xl text-gray-800 leading-10">
            {manifestoData.description}
          </p>
          <p className="border-l-2 border-secondary text-xl pl-6 italic text-secondary">
            {manifestoData.quote}
          </p>
        </div>
        <div className="hidden lg:flex justify-center">
          <div className="w-64 h-64 rounded-full border border-gray-200 flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 bg-secondary rounded-full opacity-40 scale-[5]" />
          </div>
        </div>
      </section>
      <section
        id="approach"
        className="bg-accent w-screen relative left-1/2 right-1/2 -ml-[50vw] +mr-[50vw]"
      >
        <div className="max-w-6xl mx-auto py-24 lg:py-36 px-4">
          <h2 className="text-4xl text-1xl font-normal text-gray-200 leading-12 mb-10">
            {approachData.sectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {approachData.points.map((point, index) => (
              <div key={index} className="flex flex-col space-y-6 group">
                <div className="w-5 h-5 bg-secondary rounded-full transition-transform duration-300 group-hover:scale-125" />

                <div className="space-y-4">
                  <h3 className="text-xl font-normal text-gray-200 leading-snug">
                    {point.title}
                  </h3>

                  <p className="text-gray-200 leading-relaxed font-light text-[15px] mt-5">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="instruments">
        <div className="relative z-10 flex">
          <div className="max-w-6xl py-24 lg:py-36">
            <h2 className="text-4xl text-1xl font-normal text-gray-800 leading-12 mb-10">
              {instrumentsData.sectionTitle}
            </h2>

            <div className="relative group">
              {canScrollLeft && (
                <button
                  onClick={() => scroll("left")}
                  className={`hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white shadow-2xl text-orange-500 transition-all hover:scale-110 active:scale-95 ${
                    canScrollLeft
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <ArrowIcon className="rotate-180" />
                </button>
              )}

              {canScrollRight && (
                <button
                  onClick={() => scroll("right")}
                  className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white shadow-2xl text-orange-500 transition-all hover:scale-110 active:scale-95 ${
                    canScrollRight
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <ArrowIcon />
                </button>
              )}

              <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex flex-col md:flex-row md:flex-nowrap md:overflow-x-auto snap-y md:snap-x snap-mandatory scrollbar-hide gap-8 md:gap-6 md:items-stretch"
              >
                {instrumentsData.points.map((item, index) => (
                  <CarouselCard
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="vision"
        className="bg-accent w-screen relative left-1/2 right-1/2 -ml-[50vw] mr-[50vw] py-24 px-4 lg:py-36"
      >
        {/* Inner Container: This keeps your text from hitting the screen edges */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div className="max-w-3xl">
            <h2 className="text-4xl font-normal text-gray-200 leading-tight mb-10">
              {aboutContentData.sectionSubtitle}
            </h2>

            <div className="space-y-6">
              <p className="font-normal text-xl text-gray-200">
                {aboutContentData.fundingExplanation}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="w-64 h-64 rounded-full border border-gray-300/60 flex items-center justify-center relative">
              <div className="w-10 h-10 bg-secondary rounded-full animate-[ping_3s_linear_infinite]" />
              <div className="absolute w-32 h-32 bg-secondary/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20">
          {/* <div className="max-w-2xl">
            <p className="text-xl text-gray-200 mb-10">
              {aboutContentData.contributionIntro}
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {aboutContentData.missionPoints.map((point, index) => (
              <div key={index} className="flex flex-col space-y-6 group">
                <div className="w-5 h-5 bg-secondary rounded-full transition-transform duration-300 group-hover:scale-125" />

                <div className="space-y-4">
                  <h3 className="text-xl font-normal text-gray-200 leading-snug">
                    {point.title}
                  </h3>

                  <p className="text-gray-200 leading-relaxed font-light text-[15px] mt-5">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-2xl mx-auto py-24 lg:py-36">
        <div className="flex-col flex gap-5 items-center text-center">
          <h2 className="text-4xl text-gray-800">
            {callToActionData.sectionTitle}
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            {callToActionData.description}
          </p>
        </div>
        <div className="flex-col flex mt-10 items-center">
          <CTAbutton>Kļūsti Par Biedru</CTAbutton>
        </div>
      </section>
    </main>
  );
}
// test comment
