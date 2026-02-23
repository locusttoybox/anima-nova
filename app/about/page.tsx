"use client";
import aboutPageData from "@/data/aboutPageData";

export default function About() {
  return (
    <main>
      <section className="bg-gradient-to-b from-accent to-[#fefcf7] -mt-5 w-screen relative left-1/2 right-1/2 -ml-[50vw] mr-[50vw] overflow-hidden">
        <div className="max-w-6xl mx-auto pt-20 pb-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="max-w-2xl">
              <h1 className="text-gray-800 text-4xl mb-12 font-serif">
                {aboutPageData.hero.sectionTitle}
              </h1>
              <p className="text-lg leading-relaxed text-gray-800 mb-10">
                {aboutPageData.hero.mainDescription}
              </p>

              {aboutPageData.features.slice(0, 1).map((point, index) => (
                <div key={index} className="mb-10">
                  <h3 className="text-2xl mb-4 text-gray-800">{point.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex justify-center items-center sticky top-40 py-20">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* The Large Thin Outer Circle (Static or very slow rotation) */}
                <div className="absolute inset-0 border border-gray-500/30 rounded-full animate-[spin_20s_linear_infinite]" />

                {/* The Floating Core (The Orbital Drift) */}
                <div className="animate-orbital relative flex items-center justify-center">
                  {/* Soft Glow Background */}
                  <div className="absolute w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />

                  {/* The Solid Orange Orb (from your Screenshot) */}
                  <div className="relative w-16 h-16 bg-secondary rounded-full shadow-[0_0_40px_rgba(234,145,53,0.4)]">
                    {/* Subtle inner highlight to make it look 3D */}
                    <div className="absolute top-2 left-3 w-4 h-4 bg-white/20 rounded-full blur-sm" />
                  </div>
                </div>

                <div className="absolute w-48 h-48 border border-gray-400/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            {aboutPageData.features.slice(1).map((point, index) => (
              <div key={index}>
                <h3 className="text-2xl mb-6 text-gray-800">{point.title}</h3>
                <p className="text-lg leading-relaxed text-gray-800 mb-8">
                  {point.description}
                </p>

                <div className="space-y-4">
                  {point.subPoints?.map((sub) => (
                    <div key={sub.id} className="flex items-start gap-5">
                      <div className="w-3 h-3 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto relative lg:pb-24 px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl mb-8 text-gray-800">
            {aboutPageData.team.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-800 mb-12">
            {aboutPageData.team.description}
          </p>

          {aboutPageData.team.members.map((member, index) => (
            <div key={member.id} className="mb-10">
              <h3 className="text-2xl mb-4 text-gray-800">{member.name}</h3>
              <p className="text-lg font-medium text-secondary mb-2">
                {member.role}
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
