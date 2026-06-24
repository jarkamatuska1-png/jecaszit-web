export default function BrushStroke({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #9a7020 0%, #e8c96e 25%, #f5e07e 48%, #d4af5a 65%, #9a7020 85%, #e0c060 100%)",
          clipPath: "polygon(0% 18%, 0.5% 0%, 99% 4%, 100% 22%, 99.5% 78%, 100% 100%, 1% 96%, 0% 82%)",
          zIndex: 0,
        }}
      />
      <span className="relative z-10 text-white px-4 py-1">{children}</span>
    </span>
  );
}
