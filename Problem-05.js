const str = "I am a little honest person";

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

let result = analyzeText(str);

console.log(result);