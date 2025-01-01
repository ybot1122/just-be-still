export default function BasicButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="border border-forestDark px-5 rounded-full hover:bg-forestDark hover:text-white"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
