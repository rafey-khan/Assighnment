function getcode1(){
    return `
        ####  To check which is greter in a, b,c  using if(...) ####
        
        let a=0,b=2,c=34;
        if(a>b){
            if(a>c){ var res = "A is Greater"; console.log(res);}
            else{
                var res = "C is Greater";
                console.log(res);
            }
        }else{
            if(b>c){ var res = "B is Greater"; console.log(res);}
            else{
                var res = "C is Greater";
                console.log(res);
            }
        }

        ##### To Check which is greter using ? operator #####
        let a=0,b=45,c = 9;
        var res = (a>b)?(a>c)? "A is Greater" : "C is Greater" : (b>c)? "B is Greater" : "C is Greater";
    `;
}
function switchcode(){
    return `
        ###  Check which is greater using switch ###

        let a=0,b=3,c=9;
        switch(+(a>b)){  //  +(a>b) => +(true) => 1
            case 1: switch(+(a>c)){
                case 1: var res = "A is greater"; console.log(res); break;
                case 0: var res = "C is greater"; console.log(res);
            }
            break;
            case 0: switch(+(b>c)){
                case 1: var res = "B is greater"; console.log(res);
                case 0: var res = "C is greater"; console.log(res);
            }
        }
    `;
}

export {getcode1 as ifcode,switchcode}
