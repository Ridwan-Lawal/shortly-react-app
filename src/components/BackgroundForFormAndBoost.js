export function BackgroundForFormAndBoost({
  bgMobile = "bg-shorten-mobile",
  bgDesktop = "md:bg-shorten-desktop",
  padding = "p-6",
  backgroundPosition = "top right",
  borderRadius = "rounded-lg",
  children,
}) {
  const bgStyle = {
    backgroundPosition,
  };

  return (
    <div className={`bg-darkViolet ${borderRadius} `}>
      <div
        style={bgStyle}
        className={`${bgMobile} ${bgDesktop} ${padding}  ${borderRadius}  bg-no-repeat `}
      >
        {children}
      </div>
    </div>
  );
}
