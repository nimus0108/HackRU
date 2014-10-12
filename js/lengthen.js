//Essay Lenghtener!!!!!!!!!!!!
var sample = "Sample essay.";

function replacemath(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.replace("+", "added with");
    }
    else if(random === 2) {
        essay = essay.replace("+", "plus");
    }
    
    essay = essay.replace("%"," percent");
    essay = essay.replace(" ÷"," divided by");
    essay = essay.replace("=","equals");
    essay = essay.replace("&","and");
    essay = essay.replace("minus","subtracted by");
    essay = essay.replace(" -"," subtracted by");
    essay = essay.replace(" x "," multiplied by ");
    essay = essay.replace(" *"," multiplied by");
    essay = essay.replace(" /"," divided by");
    essay = essay.replace("^","raised to the power of");
    
    return essay;
}
function replacenumbers(essay){
    essay = essay.replace(" 100 "," one hundred ");
    essay = essay.replace(" 99 "," ninety-nine ");
    essay = essay.replace(" 98 "," ninety-eight ");
    essay = essay.replace(" 97 "," ninety-seven ");
    essay = essay.replace(" 96 "," ninety-six ");
    essay = essay.replace(" 95 "," ninety-five ");
    essay = essay.replace(" 94 "," ninety-four ");
    essay = essay.replace(" 93 "," ninety-three ");
    essay = essay.replace(" 92 "," ninety-two ");
    essay = essay.replace(" 91 "," ninety-one ");
    essay = essay.replace(" 90 "," ninety ");
    essay = essay.replace(" 89 "," eighty-nine ");
    essay = essay.replace(" 88 "," eighty-eight ");
    essay = essay.replace(" 87 "," eighty-seven ");
    essay = essay.replace(" 86 "," eighty-six ");
    essay = essay.replace(" 85 "," eighty-five ");
    essay = essay.replace(" 84 "," eighty-four ");
    essay = essay.replace(" 83 "," eighty-three ");
    essay = essay.replace(" 82 "," eighty-two ");
    essay = essay.replace(" 81 "," eighty-one ");
    essay = essay.replace(" 80 "," eighty ");
    essay = essay.replace(" 79 "," seventy-nine ");
    essay = essay.replace(" 78 "," seventy-eight ");
    essay = essay.replace(" 77 "," seventy-seven ");
    essay = essay.replace(" 76 "," seventy-six ");
    essay = essay.replace(" 75 "," seventy-five ");
    essay = essay.replace(" 74 "," seventy-four ");
    essay = essay.replace(" 73 "," seventy-three ");
    essay = essay.replace(" 72 "," seventy-two ");
    essay = essay.replace(" 71 "," seventy-one ");
    essay = essay.replace(" 70 "," seventy ");
    essay = essay.replace(" 69 "," sixty-nine ");
    essay = essay.replace(" 68 "," sixty-eight ");
    essay = essay.replace(" 67 "," sixty-seven ");
    essay = essay.replace(" 66 "," sixty-six ");
    essay = essay.replace(" 65 "," sixty-five ");
    essay = essay.replace(" 64 "," sixty-four ");
    essay = essay.replace(" 63 "," sixty-three ");
    essay = essay.replace(" 62 "," sixty-two ");
    essay = essay.replace(" 61 "," sixty-one ");
    essay = essay.replace(" 60 "," sixty ");
    essay = essay.replace(" 59 "," fifty-nine ");
    essay = essay.replace(" 58 "," fifty-eight ");
    essay = essay.replace(" 57 "," fifty-seven ");
    essay = essay.replace(" 56 "," fifty-six ");
    essay = essay.replace(" 55 "," fifty-five ");
    essay = essay.replace(" 54"," fifty-four ");
    essay = essay.replace(" 53 "," fifty-three ");
    essay = essay.replace(" 52 "," fifty-two ");
    essay = essay.replace(" 51 "," fifty-one ");
    essay = essay.replace(" 50 "," fifty ");
    essay = essay.replace(" 49 "," forty-nine ");
    essay = essay.replace(" 48 "," forty-eight ");
    essay = essay.replace(" 47 "," forty-seven ");
    essay = essay.replace(" 46 "," forty-six ");
    essay = essay.replace(" 45 "," forty-five ");
    essay = essay.replace(" 44 "," forty-four ");
    essay = essay.replace(" 43 "," forty-three ");
    essay = essay.replace(" 42 "," forty-two ");
    essay = essay.replace(" 41 "," forty-one ");
    essay = essay.replace(" 40 "," forty ");
    essay = essay.replace(" 39 "," thirty-nine ");
    essay = essay.replace(" 38 "," thirty-eight ");
    essay = essay.replace(" 37 "," thirty-seven ");
    essay = essay.replace(" 36 "," thirty-six ");
    essay = essay.replace(" 35 "," thirty-five ");
    essay = essay.replace(" 34 "," thirty-four ");
    essay = essay.replace(" 33 "," thirty-three ");
    essay = essay.replace(" 32 "," thirty-two ");
    essay = essay.replace(" 31 "," thirty-one ");
    essay = essay.replace(" 30 "," thirty ");
    essay = essay.replace(" 29 "," twenty-nine ");
    essay = essay.replace(" 28 "," twenty-eight ");
    essay = essay.replace(" 27 "," twenty-seven ");
    essay = essay.replace(" 26 "," twenty-six ");
    essay = essay.replace(" 25 "," twenty-five ");
    essay = essay.replace(" 24 "," twenty-four ");
    essay = essay.replace(" 23 "," twenty-three ");
    essay = essay.replace(" 22 "," twenty-two ");
    essay = essay.replace(" 21 "," twenty-one ");
    essay = essay.replace(" 20 "," twenty ");
    essay = essay.replace(" 19 "," nineteen ");
    essay = essay.replace(" 18 "," eighteen ");
    essay = essay.replace(" 17 "," seventeen ");
    essay = essay.replace(" 16 "," sixteen ");
    essay = essay.replace(" 15 "," fifteen ");
    essay = essay.replace(" 14 "," fourteen ");
    essay = essay.replace(" 13 "," thirteen ");
    essay = essay.replace(" 12 "," twelve ");
    essay = essay.replace(" 11 "," eleven ");
    essay = essay.replace(" 10 "," ten ");
    essay = essay.replace(" 9 " ," nine ");
    essay = essay.replace(" 8 "," eight ");
    essay = essay.replace(" 7 "," seven ");
    essay = essay.replace(" 6 "," six ");
    essay = essay.replace(" 5 "," five ");
    essay = essay.replace(" 4 "," four ");
    essay = essay.replace(" 3 "," three ");
    essay = essay.replace(" 2 "," two ");
    essay = essay.replace(" 1 "," one ");
    return essay
    
}
function replacetransition(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.replace("thus","therefore");
        essay = essay.replace("additionally","correspondingly");
        essay = essay.replace("for example","one example that personifies this is");
        essay = essay.replace("for example","one instance that personifies this is");

    }
    if(random === 2) {
        essay = essay.replace("also","in addition");
        essay = essay.replace("and","in addition");
        essay = essay.replace("thus","as a consequence");
        essay = essay.replace("additionally","comparatively");
        essay = essay.replace("if","in the instance that");
        essay = essay.replace("for example","one example that shows this is");
        essay = essay.replace("for example","one instance that shows this is");
        essay = essay.replace("last","last of all");


    }
    essay = essay.replace("because","for the reason that");
    essay = essay.replace("also","additionally");
    essay = essay.replace("and","additionally");
    essay = essay.replace("etc","and so and so forth");
    essay = essay.replace("very","extraordinarily");
    essay = essay.replace("clearly","obviously");
    essay = essay.replace("thus","consequently");
    essay = essay.replace("additionally","in the same fashion");
    essay = essay.replace("but","however");
    essay = essay.replace("if","in the event that");
    essay = essay.replace("for example","one example that illustrates this is");
    essay = essay.replace("for instance","one instance that illustrates this is");
    essay = essay.replace("last","ultimately");
    essay = essay.replace("first","first of all");
    essay = essay.replace("next","consequently");
    return essay;
}



function finalreplace(essay){
    essay = essay.replacenumbers(essay);
    essay = essay.replacemath(essay);
    essay = essay.replacetransition(essay);
    return essay;
}


