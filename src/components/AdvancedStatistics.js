import { WriteUp } from "./WriteUp";

export function AdvancedStatistics() {
  return (
    <div className="mt-20">
      <div className="text-center px-8">
        <WriteUp
          headingText="text-3xl"
          heading="Advanced Statistics"
          bodyText="text-lg"
          headingTextColor="text-veryDarkBlue"
          marginLeft=""
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </WriteUp>
      </div>

      <div className="flex flex-col mt-24 gap-24 max-w-sm  mx-auto md:flex-row md:gap-8 md:max-w-6xl md:h-[400px]">
        <Feature
          flexSelf="self-start"
          featureHeading="Brand Recognition"
          imagePath="/icon-brand-recognition.svg"
        >
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </Feature>
        <Feature
          flexSelf="self-center"
          featureHeading="Detailed Records"
          imagePath="/icon-detailed-records.svg"
        >
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </Feature>
        <Feature
          flexSelf="self-end"
          featureHeading="Fully Customizable"
          imagePath="/icon-fully-customizable.svg"
        >
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </Feature>
      </div>
    </div>
  );
}
function Feature({
  imagePath,
  children,
  featureHeading = "Brand recognition",
  flexSelf,
}) {
  return (
    <div
      className={`text-center shadow-md md:text-left bg-white pb-9 rounded-md px-8 flex flex-col items-center ${flexSelf} border`}
    >
      <section className="bg-darkViolet relative bottom-10 flex justify-center  w-fit p-6 rounded-full">
        <img src={imagePath} alt="" />
      </section>

      <WriteUp
        heading={featureHeading}
        headingText="text-2xl"
        bodyText="text-base leading-relaxed"
        marginLeft=""
        headingTextColor="text-veryDarkBlue"
      >
        {children}
      </WriteUp>
    </div>
  );
}
