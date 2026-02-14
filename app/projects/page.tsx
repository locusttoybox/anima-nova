"use client";

import Image from "next/image";
import somaticDanceData from "@/data/projects/somaticDanceData";
import SomaticDance from "@/assets/somatic-dance-1.png";

export default function Projects() {
  return (
    <main>
      <section className="max-w-6xl relative px-4">
        <div className="mx-auto pt-32">
          <h1 className="text-gray-800 text-4xl mb-12">
            {somaticDanceData.sectionTitle}
          </h1>
        </div>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30">
          <div>
            {somaticDanceData.projects.map((project) => (
              <div key={project.id}>
                <h3 className="text-gray-800 text-2xl mt-2 italic border-l-2 border-secondary pl-6">
                  {project.title}
                </h3>
                <h2 className="text-gray-800 text-xl mt-5">
                  {project.subTitle}
                </h2>

                <p className="text-gray-800 mt-5 leading-relaxed">
                  {project.descriptionPart1}
                </p>
                <p className="text-gray-800 mt-5 leading-relaxed">
                  {project.descriptionPart2}
                </p>
              </div>
            ))}
          </div>
          <div>
            <Image src={SomaticDance} alt="Somatic Dance" />
          </div>
        </div>
      </section>
      <section className="max-w-6xl relative px-4">
        <div className="mx-auto py-24 lg:py-36">
          {somaticDanceData.projects.find((p) => p.id === "2") && (
            <div>
              <h3 className="text-2xl mb-8 text-gray-800">
                {somaticDanceData.projects.find((p) => p.id === "2")?.text}
              </h3>
              <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30">
                <div>
                  <p className="mb-10 text-gray-700 leading-relaxed">
                    {
                      somaticDanceData.projects.find((p) => p.id === "2")
                        ?.description
                    }
                  </p>
                </div>
                <div></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                {somaticDanceData.projects
                  .find((p) => p.id === "2")
                  ?.points?.map((point, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="space-y-4">
                        <div className="w-5 h-5 bg-secondary rounded-full transition-transform duration-300 group-hover:scale-125" />

                        <h4 className="text-xl font-medium text-gray-800 mb-2">
                          {point.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
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
    </main>
  );
}
