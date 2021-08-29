// import data access functions

import {minus} from '../data-access/minus.js' ;
import { save } from '../data-access/save.js';

export function minusOne ()
{
    let minusOneNumber = minus () ;

    if(minusOneNumber < 0)
    {
        minusOneNumber = 0 ;
        save(minusOneNumber);
    }

    return minusOneNumber;
}