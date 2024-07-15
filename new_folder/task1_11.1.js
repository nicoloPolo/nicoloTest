function returnData (text, sec){
    setTimeout(() => {
        console.log(text);
    }, sec);
}

returnData("Hello", 3000);