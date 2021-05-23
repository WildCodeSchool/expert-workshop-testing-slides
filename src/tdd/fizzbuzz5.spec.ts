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
            "should return the number passed in param it is not a multiple of 3 or 5", 
            ()=>{
                expect(fizzbuzz(1)).toEqual(1);
                expect(fizzbuzz(2)).toEqual(2);
                expect(fizzbuzz(4)).toEqual(4);
                expect(fizzbuzz(6)).toEqual(6);
                //... you should probably do a loop here :p 
            }
        ); 

        it(
            "should return 'fizzbuzz' if the number passed in param is a multiple of 3 and 5", 
            ()=>{
                
                expect(fizzbuzz(15)).toEqual("fizzbuzz");
                expect(fizzbuzz(30)).toEqual("fizzbuzz");
                expect(fizzbuzz(45)).toEqual("fizzbuzz");
                expect(fizzbuzz(60)).toEqual("fizzbuzz");
                //... you should probably do a loop here :p 
            }
        ); 

        it(
            "should return 'fizz' if the number passed in param", 
            ()=>{
                
                expect(fizzbuzz(3)).toEqual("fizz");
                expect(fizzbuzz(6)).toEqual("fizz");
                expect(fizzbuzz(9)).toEqual("fizz");
                expect(fizzbuzz(12)).toEqual("fizz");
                expect(fizzbuzz(18)).toEqual("fizz");
                //... you should probably do a loop here :p 
            }
        ); 

        it(
            "should return 'buzz' if the number passed in param is a multiple of 5 but not a multiple of 3", 
            ()=>{
                
                expect(fizzbuzz(5)).toEqual("buzz");
                expect(fizzbuzz(10)).toEqual("buzz");
                expect(fizzbuzz(20)).toEqual("buzz");
                expect(fizzbuzz(25)).toEqual("buzz");
                //... you should probably do a loop here :p 
            }
        ); 
    }
);