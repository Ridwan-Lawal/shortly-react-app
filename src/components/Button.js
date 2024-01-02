export function Button({
  content = "button",
  borderRadius = "rounded-3xl",
  text = "text-base font-medium",
  paddingY = "py-2.5",
  bgColor = "bg-cyan",
  width,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${bgColor}  ${paddingY} ${text} ${width} hover:opacity-80 transition-all duration-300 ${borderRadius} px-8 text-white`}
    >
      {content}
    </button>
  );
}
