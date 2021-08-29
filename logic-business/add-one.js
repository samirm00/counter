// import data access functions 

import {add} from '../data-access/add.js' ;
import {save} from '../data-access/save.js';

export function addOne ()
{
    let addOneNumber = add () ;

    if(addOneNumber <= 0)
    {
        addOneNumber = 1 ;
        save(addOneNumber);
    }

    return addOneNumber ;
}