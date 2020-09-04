import { css } from "styled-components";

const sizes = {
  lgDesktop: 1440,
  mdDesktop: 1280,
  smDesktop: 1024,
  lgTablet: 768,
  mdTablet: 540,
  lgPhone: 425,
  smPhone: 374,
  xsPhone: 330,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;

  // console.log(emSize);
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  // console.log(accumulator);
  return accumulator;
}, {});

export default media;
