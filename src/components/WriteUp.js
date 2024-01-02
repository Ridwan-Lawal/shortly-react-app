export function WriteUp({
  heading = "More than just shorter links",
  children,
  headingText = "text-4xl md:text-6xl",
  bodyText = "text-lg md:text-xl",
  marginTop = "mt-5",
  headingTextColor = "text-veryDarkBlue",
  marginLeft = "md:ml-0",
}) {
  return (
    <div>
      <h1 className={`${headingText} font-bold ${headingTextColor}`}>
        {heading}
      </h1>
      <p
        className={`${bodyText} ${marginTop} max-w-lg mx-auto ${marginLeft} text-grayishViolet font-medium`}
      >
        {children}
      </p>
    </div>
  );
}
