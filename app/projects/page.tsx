"use client";

import Image from "next/image";
import somaticDanceData from "@/data/projects/somaticDanceData";
import SomaticDance from "@/assets/somatic-dance-1.png";
import SomaticCoach from "@/assets/agnese.png";
import CTAbutton from "@/components/CTAbutton";

export default function Projects() {
  const project1 = somaticDanceData.projects.find((p) => p.id === "1");
  const project2 = somaticDanceData.projects.find((p) => p.id === "2");
  const project3 = somaticDanceData.projects.find((p) => p.id === "3");

  return (
    <main>
      <section className="max-w-6xl mx-auto relative lg:pb-24">
        <div className="lg:pt-32 md:pt-32 pt-20">
          <h1 className="text-gray-800 text-4xl mb-12">
            {somaticDanceData.sectionTitle}
          </h1>
        </div>

        {project1 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-30 md:gap-30 gap-20 mb-24 lg:mb-0">
            <div>
              <h3 className="text-gray-800 text-2xl mt-2 italic border-l-2 border-secondary pl-6">
                {project1.title}
              </h3>
              <h2 className="text-gray-800 text-xl mt-5">
                {project1.subTitle}
              </h2>
              <p className="text-gray-800 mt-5 leading-relaxed">
                {project1.descriptionPart1}
              </p>
              <p className="text-gray-800 mt-5 leading-relaxed">
                {project1.descriptionPart2}
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={SomaticDance}
                alt="Somatic Dance"
                priority
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        )}
      </section>

      <section className="bg-accent w-screen relative left-1/2 right-1/2 -ml-[50vw] mr-[50vw]">
        <div className="max-w-6xl mx-auto py-24 lg:py-36 px-4">
          {project2 && (
            <div>
              <h3 className="text-2xl mb-8 text-gray-200 font-normal">
                {project2.text}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-30 md:gap-30 mb-12">
                <p className="text-gray-200 leading-relaxed">
                  {project2.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
                {project2.points?.map((point, index) => (
                  <div key={index} className="flex items-start gap-6 mt-4">
                    <div className="flex flex-col space-y-6 group">
                      <div className="w-5 h-5 bg-secondary rounded-full transition-transform duration-300 group-hover:scale-125" />
                      <h4 className="text-xl font-normal text-gray-200 mb-5">
                        {point.title}
                      </h4>
                      <p className="text-gray-200 font-light leading-relaxed text-[15px]">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto relative py-24 lg:py-36">
        {project3 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-30 md:gap-30 gap-10">
            {" "}
            <div className="order-1 lg:order-2 flex justify-center items-start">
              <Image
                src={SomaticCoach}
                alt="Somatic dance coach"
                className="rounded-lg shadow-sm"
              />
            </div>
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl mb-8 text-gray-800 font-normal">
                {project3.text}
              </h3>

              <div className="space-y-6 text-gray-800 leading-relaxed">
                <p>{project3.descriptionPart1}</p>
                <p>{project3.descriptionPart2}</p>
                <p>{project3.descriptionPart3}</p>
              </div>

              <div className="mt-10">
                <CTAbutton>Pieteikties Nodarbību Ciklam</CTAbutton>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
