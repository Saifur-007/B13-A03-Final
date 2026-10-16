function validOtp(otp){


    if(typeof otp !== "string"){
        return "Invalid";
    }else if(otp.length === 8 && otp.startsWith("ph-")){
        return true;
    }else{
        return false;
    }
}
let result = validOtp("ph-1234");
console.log(result);