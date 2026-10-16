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

let omr = { right: 50, wrong: 10, skip: 40 };
console.log(finalScore(omr));