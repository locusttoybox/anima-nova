import React from "react";

const CTAbutton = ({ children }: { children: React.ReactNode }) => {
  //google form link insert here

  return (
    <section>
      <a
        href="https://visidati.lv/tk/12132994"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center px-8 py-4 font-normal tracking-wide text-white transition duration-300 ease-out rounded-4xl shadow-xl bg-secondary hover:bg-[#e67e22] active:scale-95 transform"
      >
        {children}
      </a>
    </section>
  );
};

export default CTAbutton;
