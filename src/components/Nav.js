import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(function () {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else if (window.scrollY < 100) {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <nav
      className={`flex py-5 justify-between items-center flex-col md:flex-row   max-w-[1200px]  ${
        isScrolled && " shadow-md fixed w-full max-w-none z-50 bg-white"
      }   mx-auto px-8`}
    >
      <div className="flex w-full  md:w-[20%] justify-between items-center">
        {/* logo */}
        <section>
          <Logo />
        </section>

        {/* hamburger menu */}
        <section
          onClick={() => setIsOpen((curBool) => !curBool)}
          className="md:hidden cursor-pointer"
        >
          {isOpen ? (
            <AiOutlineClose className="text-2xl text-gray-400 rotate-180 transtion-trasform" />
          ) : (
            <GiHamburgerMenu className="text-2xl text-gray-400 rotate-180 transtion-trasform" />
          )}
        </section>
      </div>

      {/* */}
      <section
        className={`w-[90%]  flex z-50 flex-col items-center bg-darkViolet ${
          isOpen ? " h-fit py-12 " : "h-0 p-0 overflow-hidden"
        }   fixed transtion-all duration-200 rounded-xl mt-6 md:mt-0 md:py-0 top-10 gap-7 px-8 md:static md:h-full md:bg-white  md:flex-row md:w-[80%] md:justify-between   md:px-0`}
      >
        {/* first part */}
        <ul className=" flex flex-col items-center gap-7 md:gap-9 md:flex-row">
          <li className="link">Features</li>
          <li className="link">Pricing</li>
          <li className="link">Resources</li>
        </ul>
        <p className="border-b md:hidden border-gray-600 w-full"></p>

        {/* second part */}
        <ul className="w-full flex flex-col gap-6 md:justify-end md:gap-9 items-center md:flex-row">
          <li className="link">Login</li>
          <Button
            content="Sign Up"
            text="text-xl md:text-lg"
            width="w-[100%] md:w-fit"
          />
        </ul>
      </section>
    </nav>
  );
}
