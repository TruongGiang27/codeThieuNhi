
function ct(n){
    if(n==1)
        return 1;

    else if(n==2)
        return 2;

    else if(n==0)
        return 1;
        
    else
        return ct(n-1) + ct(n-2);
    
}

function hl(n,e){
 if(e >= n){
    return 0;
 }
 return ((ct(e+1)-ct(e)) * ct(n-e-1))
}

console.log(hl(7,3));

