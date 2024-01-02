import { BackgroundForFormAndBoost } from "./BackgroundForFormAndBoost";
import { Button } from "./Button";

export function BoostSection() {
  return (
    <div className="text-center mt-24 md:mt-28">
      <BackgroundForFormAndBoost
        bgMobile="bg-boost-mobile"
        bgDesktop="md:bg-boost-desktop"
        backgroundPosition="top right"
        padding="py-20 md:py-12"
        borderRadius="rouned-none"
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Boost your links today
        </h2>
        <Button text="font-bold text-lg mt-6 md:mt-8" content="Get Started" />
      </BackgroundForFormAndBoost>
    </div>
  );
}
