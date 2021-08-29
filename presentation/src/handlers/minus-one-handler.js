// import logic business functions
import { minusOne } from '../../../logic-business/minus-one.js';

export function minusOneHandler() {
  const counter = minusOne();

  const counterPra = document.getElementById('counter');
  counterPra.innerText = counter;
}
