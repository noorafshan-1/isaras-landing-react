import React, { useState } from "react";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-[999]">
      <div
        className="
          header-one rounded-full
          lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px]
          md:max-w-[720px] sm:max-w-[540px]
          min-[500px]:max-w-[450px] min-[425px]:max-w-[375px] max-w-[320px]
          fixed left-1/2 -translate-x-1/2 top-5
          mx-auto w-full px-5 xl:py-2 py-3
          flex items-center justify-between
          bg-white/60 backdrop-blur-[25px]
          dark:bg-background-7 dark:border dark:border-stroke-7
          shadow-[0_4px_25px_rgba(0,0,0,0.06)]"
      >
        <a href="/" className="select-none">
          <figure className="lg:max-w-[198px]">
            <img src="img-isaras/t-2.svg" alt="logo" className="dark:invert" />
          </figure>
          {/* <figure className="max-w-[44px] lg:hidden block">
            <img src="/img-isaras/isaras-bm.svg" alt="mobile logo" className="w-full dark:hidden block" />
            
          </figure> */}
        </a>

        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "Features", href: "#features" },
              { label: "How it Works", href: "#hiw" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="
                    text-[16px] px-3 py-1.5 rounded-full
                    text-black/70 dark:text-accent/70
                    hover:text-black dark:hover:text-white
                    transition-all
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="
               lg:inline-block
              px-6 py-2.5 font-semibold rounded-full
              text-white
              bg-gradient-to-r from-[#B06BFF] to-[#7A2FF1]
              shadow-[0_4px_18px_rgba(130,60,255,0.28)]
              hover:shadow-[0_6px_28px_rgba(130,60,255,0.45)]
              transition-all
            "
          >
            SIGN IN
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="
              lg:hidden flex flex-col gap-[5px] size-12
              bg-background-4 dark:bg-background-6 
              rounded-full items-center justify-center cursor-pointer
            "
          >
            <span className="sr-only">Menu</span>
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1" />
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1" />
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1" />
          </button>
        </div>
      </div>

      <aside
        className={`
          fixed top-0 right-0
          h-screen w-full sm:w-1/2
          bg-white dark:bg-background-7
          z-[999]
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <figure className="max-w-[44px]">
              <img
                src="/img-isaras/isaras-bm.svg"
                alt="logo"
                className="w-full dark:hidden block"
              />
            </figure>

            <button
              onClick={() => setMobileOpen(false)}
              className="size-10 rounded-full bg-gray-200 dark:bg-background-9
                   relative flex items-center justify-center"
              aria-label="Close menu"
            >
              <span className="absolute w-4 h-0.5 bg-black rotate-45" />
              <span className="absolute w-4 h-0.5 bg-black -rotate-45" />
            </button>
          </div>

          <div className="h-[85vh] overflow-y-auto pb-10">
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Features", href: "#features" },
                { label: "How it Works", href: "#hiw" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 border-b border-stroke-4 dark:border-stroke-6
                         text-black/70 dark:text-accent/70 text-[17px] transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
