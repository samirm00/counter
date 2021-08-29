// import data

import { store } from '../data/data.js';


export function minus ()
{
    const newNumber = store.counter-- ;
    return newNumber ;
}