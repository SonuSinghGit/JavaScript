function getGrade(score){
    if(score>=90 && score<=100){
        return "A+";
    }
    else if(score>= 80 && score <=89){
        return "A";
    }
     else if(score>= 70 && score <=79){
        return "B"
    }
     else if(score>= 60 && score<=69){
        return "C";
    }
     else if(score>= 35){
        return "D";
    }
    else{
        return "Invalid Score"
    }
    
}
const res= getGrade(8)
console.log(res)