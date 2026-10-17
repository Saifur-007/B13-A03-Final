// Problem 01

function newPrice(currentPrice, discount){

    if(!Number.isFinite(currentPrice) || !Number.isFinite(discount)){
    return "Invalid"        
    }

    let discountedPrice = (currentPrice/100)*discount;
    let afterDiscount = (currentPrice - discountedPrice);

    if(afterDiscount < 0){
    return "Invalid"
    }
    return afterDiscount.toFixed(3);
}

// Problem 02

function validOtp(otp){

    if(typeof otp !== "string"){
        return "Invalid";
    }else if(otp.length === 8 && otp.startsWith("ph-")){
        return true;
    }else{
        return false;
    }
}

// Problem 03

function finalScore(omr){
    
    if(typeof omr !== "object" || omr === null || Array.isArray(omr)){
        return "Invalid";
    }else if( typeof omr.right !=="number"
            ||typeof omr.skip !=="number"
            ||typeof omr.wrong !=="number") {
        return "Invalid";
    }else if(omr.right + omr.skip + omr.wrong !== 100){
        return "Invalid";
    }else{
        let total = Math.round(omr.right-(omr.wrong * 0.5));
        return total;
    }
}

// Problem 04

function gonoVote(votes){

    let ha = 0;
    let na = 0;

    if (!Array.isArray(votes)){
        return "Invalid";
    }

    for (let vote of votes){
        if(vote === "ha"){
            ha++;
        }else{
            na++
        }
    }

    if(ha > na){
        return true;
    }else if(na === ha){
        return "equal";
    }else{
        return false;
    }
}

// Problem 05

function analyzeText(str){

    if(typeof str !== "string" || !str.trim()){
        return "Invalid";
    }

    let tokenNum = (str.replaceAll(" ", "").length);
    let allWOrds = str.split(" ");
    let longWord = allWOrds[0];

    for (let i = 0;i < allWOrds.length; i++){
        if(longWord.length < allWOrds[i].length){
            longWord = allWOrds[i];
        }
    }

    return { longwords: longWord, token: tokenNum };
}