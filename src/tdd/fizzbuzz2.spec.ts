describe( 
    "Fizzbuzz test suite", 
    ()=>{
        it(
            "should be able to invoke the fizzbuzz function", 
            ()=>{
                expect(fizzbuzz).toBeDefined();
            }
        ); 

        it(
            "should return the number passed in param", 
            ()=>{
                expect(fizzbuzz(1)).toEqual(1);
                expect(fizzbuzz(2)).toEqual(2);
                expect(fizzbuzz(4)).toEqual(4);
                expect(fizzbuzz(6)).toEqual(6);
                //... you should probably do a loop here :p 
            }
        ); 
    }
);