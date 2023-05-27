// WARNING: Do not replace with string interpolation.
// See: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const backgrounds: Record<string, string[]> = {
  DEFAULT: ['bg-bg', 'bg-bg-dark', 'bg-bg-dark'],
  Ice: ['bg-ice-0', 'bg-ice-1', 'bg-ice-2'],
  Lightning: ['bg-lightning-0', 'bg-lightning-1', 'bg-lightning-2'],
  Physical: ['bg-physical-0', 'bg-physical-1', 'bg-physical-2'],
  Wind: ['bg-wind-0', 'bg-wind-1', 'bg-wind-2'],
  Imaginary: ['bg-imaginary-0', 'bg-imaginary-1', 'bg-imaginary-2'],
  Quantum: ['bg-quantum-0', 'bg-quantum-1', 'bg-quantum-2'],
  Fire: ['bg-fire-0', 'bg-fire-1', 'bg-fire-2'],
};

export default backgrounds;