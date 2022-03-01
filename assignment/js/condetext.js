function getcode1(){
    return `
        ####  To check which is greter in a, b,c  using if(...) ####
        
        let a=0,b=2,c=34;
        if(a>b){
            if(a>c) console.log("A is greter");
            else{
                console.log("C is greater");
            }
        }else{
            if(b>c) console.log("B is greater");
            else{
                console.log("C is greater");
            }
        }

        ##### To Check which is greter using ? operator #####

        let a=0,b=5,c=28;
        (a>b) ? (a>c) ? console.log("A is greater!"); : console.log("C is greater"); : (b>c) ? console.log("B is greater"); : console.log("C is greater");
    `;
}
function switchcode(){
    return `
        ###  Check which is greater using switch ###

        let a=0,b=3,c=9;
        switch(+(a>b)){  //  +(a>b) => +(true) => 1
            case 1: switch(+(a>c)){
                case 1: console.log("A is greater"); break;
                case 0: console.log("C is greater");
            }
            break;
            case 0: switch(+(b>c)){
                case 1: console.log("B is greater");
                case 0: console.log("C is greater");
            }
        }
    `;
}

export {getcode1 as ifcode,switchcode}
