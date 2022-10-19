"use strict"
forOne: for(let count_2 = 0; count_2 < 3; count_2++){
        let count = 6;
        for(let count = 0; count < 5; count++){
            console.log(count);
           if (count == 2) continue forOne;
        }
}
console.log("finish");