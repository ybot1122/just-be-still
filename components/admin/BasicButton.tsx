export default function BasicButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="border border-forestDark px-5 rounded-full hover:bg-forestDark hover:text-white"
    >
      {children}
    </button>
  );
}
