export default function BrushStroke({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className="absolute inset-0 -skew-x-1"
        style={{
          background: "var(--gold)",
          clipPath: "polygon(0% 10%, 1% 0%, 99% 3%, 100% 15%, 99.5% 82%, 100% 100%, 1% 97%, 0% 88%)",
          zIndex: 0,
        }}
      />
      <span className="relative z-10 text-white px-3 py-0.5">{children}</span>
    </span>
  );
}
