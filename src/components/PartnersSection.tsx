import React from "react";

const PartnersSection: React.FC = () => {
  return (
    <section
      className="
        my-14 md:my-20 lg:my-[100px] 
        w-[80%] 2xl:max-w-[1440px] 
        rounded-4xl mx-auto py-[70px] px-10 
        md:px-[75px] bg-white dark:bg-background-6 
        relative z-10 md:min-h-[226px] overflow-hidden
      "
    >
      <div
        className="
          absolute select-none pointer-events-none 
          bottom-[-206px] sm:-bottom-[150px] 
          max-md:w-[400px] max-md:h-[500px] 
          left-[-17%] sm:left-[40%] 
          -translate-x-1/2 md:-bottom-[-20%] 
          w-full h-full -rotate-[96deg] sm:-rotate-[30deg] 
          -z-10
        "
      >
        <img
          src="/images/gradient/gradient-16.png"
          alt="bg"
          className="w-[115%] h-[224%]"
        />
      </div>

      <div className="text-center relative z-10 w-fit mx-auto">
        <h2 className="mb-3">Partners & Supporters</h2>

        <p className="lg:max-w-[620px] mx-auto mb-14">
          Building a smarter tomorrow, hand in hand with our partners.
        </p>
      </div>

      <aside
        className="main-container relative mt-[64px] lg:mt-[66px] z-10"
        aria-label="Our Clients"
      >
        <div
          className="
            flex items-center flex-wrap md:flex-nowrap 
            justify-center gap-4 md:gap-x-4 lg:gap-x-8
          "
          role="list"
        >
          <figure role="listitem" className="lg:min-w-36 lg:ml-8">
            <img
              src="/img-isaras/sisfs-logo.png"
              alt="Client company logo 1"
              className="lg:w-auto inline-block dark:hidden"
            />
          </figure>

          <figure role="listitem" className="lg:min-w-36">
            <img
              src="/img-isaras/IIML-EIC-logo.png"
              alt="Client company logo 2"
              className="lg:w-auto inline-block dark:hidden"
            />
          </figure>

          <figure role="listitem" className="lg:min-w-36">
            <img
              src="/img-isaras/aws-logo.png"
              alt="Client company logo 3"
              className="lg:w-auto inline-block dark:hidden"
            />
          </figure>
        </div>
      </aside>
    </section>
  );
};

export default PartnersSection;
