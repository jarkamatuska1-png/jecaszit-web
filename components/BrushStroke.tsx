export default function BrushStroke({ children, className = "", block = false }: { children: React.ReactNode; className?: string; block?: boolean }) {
  return (
    <span className={`relative ${block ? "block w-full" : "inline-block"} ${className}`}>
      <span
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #7a5810 0%, #b8902e 30%, #c9a040 50%, #b08028 70%, #7a5810 100%)",
          clipPath: "polygon(0% 18%, 0.5% 0%, 99% 4%, 100% 22%, 99.5% 78%, 100% 100%, 1% 96%, 0% 82%)",
          zIndex: 0,
        }}
      />
      <span className="relative z-10 text-white px-4 py-2 block">{children}</span>
    </span>
  );
}
