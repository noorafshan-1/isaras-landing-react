import React from "react";

import { useEffect } from "react";

const Hero: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-ns-animate]");
    elements.forEach((el) => {
      el.classList.remove("opacity-0");
    });
  }, []);

  return (
    <section
      id="scene"
      className="
        relative bg-white dark:bg-background-8 z-0
        sm:pb-0 pb-14 lg:-mb-12 md:-mb-10
        overflow-hidden
      "
    >
      <figure
        data-ns-animate
        data-delay="0.7"
        data-offset="200"
        className="
          absolute size-[700px] sm:size-[900px] lg:size-[1100px]
          rotate-[-597deg] top-[250px] left-1/2 -translate-x-1/2
          select-none pointer-events-none z-1
        "
      >
        <img
          src="/images/gradient/gradient-37.png"
          alt="download-bg"
          className="size-full object-cover animate-rotate-slow"
        />
      </figure>

      <figure className="absolute h-full w-full hero-bg-overlay-light dark:hero-bg-overlay-dark" />

      <video
        className="
          w-full h-full absolute -top-[220px] left-0
          scale-100 object-cover object-center z-[-1] min-h-[100vh]
          dark:hidden block
        "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/tube-4.mp4" type="video/mp4" />
      </video>

      <div className="relative sm:pt-[230px] pt-[160px] pb-[140px] max-[641px]:pb-16 max-[426px]:pb-10 z-10">
        <div className="main-container text-center relative z-30">
          <span
            data-ns-animate
            //  data-delay="0.1"
            className="badge badge-purple-v2 mb-5 opacity-100 !opacity-100"
          >
            Where Aspiration meets Intelligence
          </span>

          <h1 className="font-semibold mb-4">
            Your{" "}
            <span className="hero-text-gradient hero-text-color-2 block">
              AI Mentor
            </span>
            for
            <br className="hidden md:block" />
            <span className="hero-text-gradient hero-text-color-2 block">
              UPSC Success
            </span>
          </h1>

          <p className="max-w-[588px] mx-auto mb-10 md:mb-14">
            Chat, Learn & Practice with india’s largest first-stage AI Mentor
          </p>

          <ul
            className="
              flex flex-col md:flex-row gap-4 mb-9 md:mb-11 lg:mb-14
              max-md:w-full md:w-auto mx-auto md:mx-0 justify-center
            "
          >
            <li>
              <a className="btn btn-primary btn-lg md:btn-xl">
                <span>Ask Saras</span>
              </a>
            </li>
            <li>
              <a className="btn btn-white btn-lg md:btn-xl">
                <span>Try Free Now</span>
              </a>
            </li>
          </ul>

          <div
            className="
            relative max-w-[1290px] mx-auto 
            p-2.5 max-sm:p-2 
            rounded-4xl max-sm:rounded-2xl 
            bg-background-3 dark:bg-background-7 
            overflow-hidden
          "
            style={{
              backgroundImage: "url('/images/gradient/gradient-44.png')",
              backgroundSize: "auto",
            }}
          >
            <img
              src="/img-isaras/dashboard-ai-isaras.png"
              alt="hero dashboard"
              className="w-full object-cover rounded-[25px] max-sm:rounded-xl"
            />
          </div>

          <ul
            className="
              flex flex-wrap max-lg:gap-5 items-center justify-center
              gap-[42px] max-lg:mt-4 mt-20
            "
          >
            {[
              "Ask, Chat, and Learn",
              "Current Affairs",
              "Prelims & Mains PYQ Practice",
              "Mock Tests",
              "Prepare at Your Own Pace",
            ].map((text, i) => (
              <li key={i} className="flex gap-3 items-center">
                <span className="bg-green dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                  <svg
                    width="10"
                    height="8"
                    fill="none"
                    viewBox="0 0 10 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
