import { useId, useState } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  altBefore: string;
  altAfter: string;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, altBefore, altAfter }: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);
  const id = useId();

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-border shadow-sm" aria-labelledby={`${id}-label`}>
      <div className="relative aspect-[16/10] w-full">
        <img src={beforeSrc} alt={altBefore} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
          <img src={afterSrc} alt={altAfter} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-[calc(var(--pos,50%))] w-px bg-foreground/50" style={{ left: `${value}%` }} />
      </div>
      <label id={`${id}-label`} className="sr-only">Before and after slider</label>
      <input
        type="range"
        aria-labelledby={`${id}-label`}
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="relative z-10 block w-full cursor-ew-resize bg-transparent py-2"
      />
    </div>
  );
}
