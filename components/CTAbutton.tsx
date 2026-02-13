import React from "react";

const CTAbutton = ({ children }: { children: React.ReactNode }) => {
  //google form link insert here

  return (
    <section>
      <a
        // href={googleFormUrl}
        target="_blankl"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-white transition duration-300 ease-out rounded-4xl shadow-xl bg-secondary hover:bg-[#e67e22] active:scale-95 transform"
      >
        {children}
      </a>
    </section>
  );
};

export default CTAbutton;
