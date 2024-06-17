let grade = 59;

switch(true){
    case grade <= 100 && grade >= 91: 
    console.log("Perfect!");
    break;
    case grade <= 90 && grade >= 81: 
    console.log("Very Good!");
    break;
    case grade <= 80 && grade >= 71: 
    console.log("Not Bad!");
    break;
    case grade <= 70 && grade >= 60: 
    console.log("Could be better!")
    break;
    default:
        console.log("Bad :(");
}