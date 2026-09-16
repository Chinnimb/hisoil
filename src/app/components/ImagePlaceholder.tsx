import { ImageIcon } from 'lucide-react';

type LucideIcon = typeof ImageIcon;

interface ImagePlaceholderProps {
  /** What photo should eventually go here, e.g. "HiSoil Seed — germinación" */
  label: string;
  Icon?: LucideIcon;
  className?: string;
  dark?: boolean;
}

/**
 * Visual placeholder for a not-yet-produced photo. Used across Productos,
 * Servicios, Portfolio and Nosotros while final photography/AI generation
 * is pending, so the UI never ships a generic stock photo as if it were final.
 */
export function ImagePlaceholder({ label, Icon = ImageIcon, className = '', dark = false }: ImagePlaceholderProps) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4 ${
        dark ? 'bg-noche border border-white/15' : 'bg-paja border-2 border-dashed border-oliva/25'
      } ${className}`}
    >
      <Icon className={`w-5 h-5 ${dark ? 'text-white/30' : 'text-oliva/35'}`} />
      <span className={`text-[10px] font-mono uppercase tracking-widest leading-relaxed ${dark ? 'text-white/40' : 'text-oliva/45'}`}>
        {label}
      </span>
    </div>
  );
}
