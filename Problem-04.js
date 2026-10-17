const votes = ["ha", "na", "ha", "na"]  ;


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

let result = gonoVote(votes);
console.log(result);