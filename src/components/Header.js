import { Nav } from "./Nav";
import { WriteUp } from "./WriteUp";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="overflow-hidden">
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-11 items-center  max-w-7xl px-8 ml-auto">
        {/* hero */}
        <div className=" md:order-2">
          <img
            src="/illustration-working.svg"
            alt=""
            className="relative md:-right-28 -right-36"
          />
        </div>
        {/* header content */}
        <div className="text-center md:order-1 md:text-left">
          <WriteUp>
            Bulid your brand's recognition and get detailed insights on how your
            links are performing.
          </WriteUp>

          <Button text="text-lg font-bold mt-7" content="Get Started" />
        </div>
      </div>
    </header>
  );
}
