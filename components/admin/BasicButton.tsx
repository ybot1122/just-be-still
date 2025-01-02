export default function BasicButton({
  children,
  onClick,
  disabled,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <button
      onClick={onClick}
      className="border border-forestDark px-5 rounded-full hover:bg-forestDark hover:text-white cursor-pointer"
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
