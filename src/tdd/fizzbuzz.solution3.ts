/**
 * Le code minimum pour répondre à notre test est le suivant. 
 */
export function fizzbuzz(num:number):number|string{
    if( num % 3 === 0 && num % 5 === 0 )
        return "fizzbuzz";

    return num;
}