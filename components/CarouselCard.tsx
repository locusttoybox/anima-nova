import React from "react";

interface InstrumentCardProps {
  title: string;
  description: string;
}

const CarouselCard = ({ title, description }: InstrumentCardProps) => {
  return (
    <div className="flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] snap-start h-full p-2">
      <div className="lg:mb-6 group bg-secondary hover:bg-[#e67e22] transition-colors duration-300 p-8 md:p-10 rounded-2xl shadow-sm h-full flex flex-col items-start text-left">
        <div className="w-full h-12 md:h-6 mb-20 flex items-start shrink-0">
          <h3 className="text-2xl font-normal text-white leading-snug mb-5">
            {title}
          </h3>
        </div>
        <div className="w-8 h-2 bg-white/40 mb-6 shrink-0" />
        <div className="flex grow">
          <p className="text-orange-50/90 leading-relaxed font-light text-[15px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
