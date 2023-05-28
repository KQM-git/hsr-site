// WARNING: Do not replace with string interpolation.
// See: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const tabGradients: Record<string, string> = {
  Ice: 'aria-selected:from-ice aria-selected:to-ice xl:aria-selected:from-ice-light',
  Lightning: 'aria-selected:from-lightning aria-selected:to-lightning xl:aria-selected:from-lightning-light',
  Physical: 'aria-selected:from-physical aria-selected:to-physical xl:aria-selected:from-physical-light',
  Wind: 'aria-selected:from-wind aria-selected:to-wind xl:aria-selected:from-wind-light',
  Imaginary: 'aria-selected:from-imaginary aria-selected:to-imaginary xl:aria-selected:from-imaginary-light',
  Quantum: 'aria-selected:from-quantum aria-selected:to-quantum xl:aria-selected:from-quantum-light',
  Fire: 'aria-selected:from-fire aria-selected:to-fire xl:aria-selected:from-fire-light',
}

export default tabGradients;