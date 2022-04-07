import Grain from './grain';

const grainElements = document.querySelectorAll('[data-grain]');

export const initGrain = () => {
  grainElements.forEach((element) => new Grain(element));
};
