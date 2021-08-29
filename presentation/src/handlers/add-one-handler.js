// import logic business functions
import { addOne } from '../../../logic-business/add-one.js';

export function addOneHandler ()
{
    const counter = addOne () ;

    const counterPra = document.getElementById('counter');
    counterPra.innerText = counter ;

}
