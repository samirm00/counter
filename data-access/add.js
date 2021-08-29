// import data

import { store} from '../data/data.js';

export function add ()
{
    const newNumber = store.counter++ ;
    return newNumber ;
}