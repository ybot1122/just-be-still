export default function PageHeader({ header }: { header: string }) {
  return (
    <h1 className="text-3xl md:text-6xl text-white pt-[100px] pb-[50px] md:pt-[200px] md:pb-[100px] text-center bg-forest">
      {header}
    </h1>
  );
}
