//Essay Shortener!!!!!!!
var sample = "Sample essay.";

function shortenmath(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.replace( "added with", "+");
    }
    else if(random === 2) {
        essay = essay.replace("plus","+");
    }
    
    essay = essay.replace(" percent"," %");
    essay = essay.replace(" divided by"," ÷");
    essay = essay.replace("equals","=");
    essay = essay.replace("and","&");
    essay = essay.replace("subtracted by","minus");
    essay = essay.replace(" subtracted by"," -");
    essay = essay.replace(" multiplied by "," x ");
    essay = essay.replace(" multiplied by"," *");
    essay = essay.replace(" divided by"," /");
    essay = essay.replace("raised to the power of","^");
    essay = essay.replace("to the power of","^");
    
    return essay;
}
function shortennumbers(essay){
    essay = essay.replace(" one hundred "," 100 ");
    essay = essay.replace(" ninety-nine "," 99 ");
    essay = essay.replace(" ninety-eight "," 98 ");
    essay = essay.replace(" ninety-seven "," 97 ");
    essay = essay.replace(" ninety-six "," 96 ");
    essay = essay.replace(" ninety-five "," 95 ");
    essay = essay.replace(" ninety-four "," 94 ");
    essay = essay.replace(" ninety-three "," 93 ");
    essay = essay.replace(" ninety-two "," 92 ");
    essay = essay.replace(" ninety-two "," 91 ");
    essay = essay.replace(" ninety "," 90 ");
    essay = essay.replace(" eighty-nine "," 89 ");
    essay = essay.replace(" eighty-eight "," 88 ");
    essay = essay.replace(" eighty-seven "," 87 ");
    essay = essay.replace(" eighty-six "," 86 ");
    essay = essay.replace(" eighty-five "," 85 ");
    essay = essay.replace(" eighty-four "," 84 ");
    essay = essay.replace(" eighty-three "," 83 ");
    essay = essay.replace(" eighty-two "," 82 ");
    essay = essay.replace(" eighty-one "," 81 ");
    essay = essay.replace(" eighty "," 80 ");
    essay = essay.replace(" seventy-nine "," 79 ");
    essay = essay.replace(" seventy-eight "," 78 ");
    essay = essay.replace(" seventy-seven "," 77 ");
    essay = essay.replace(" seventy-seven "," 76 ");
    essay = essay.replace(" seventy-five "," 75 ");
    essay = essay.replace(" seventy-four "," 74 ");
    essay = essay.replace(" seventy-three "," 73 ");
    essay = essay.replace(" seventy-two "," 72 ");
    essay = essay.replace(" seventy-one "," 71 ");
    essay = essay.replace(" seventy "," 70 ");
    essay = essay.replace(" sixty-nine "," 69 ");
    essay = essay.replace(" sixty-eight "," 68 ");
    essay = essay.replace(" sixty-seven "," 67 ");
    essay = essay.replace(" sixty-six "," 66 ");
    essay = essay.replace(" sixty-five "," 65 ");
    essay = essay.replace(" sixty-four "," 64 ");
    essay = essay.replace(" sixty-three "," 63 ");
    essay = essay.replace(" sixty-two "," 62 ");
    essay = essay.replace(" sixty-one "," 61 ");
    essay = essay.replace(" sixty "," 60 ");
    essay = essay.replace(" fifty-nine "," 59 ");
    essay = essay.replace(" fifty-eight "," 58 ");
    essay = essay.replace(" fifty-seven "," 57 ");
    essay = essay.replace(" fifty-six "," 56 ");
    essay = essay.replace(" fifty-five "," 55 ");
    essay = essay.replace(" fifty-four "," 54");
    essay = essay.replace(" fifty-three "," 53 ");
    essay = essay.replace(" fifty-two "," 52 ");
    essay = essay.replace(" fifty-one "," 51 ");
    essay = essay.replace(" fifty "," 50 ");
    essay = essay.replace(" forty-nine "," 49 ");
    essay = essay.replace(" forty-eight "," 48 ");
    essay = essay.replace(" forty-seven "," 47 ");
    essay = essay.replace(" forty-six "," 46 ");
    essay = essay.replace(" forty-five "," 45 ");
    essay = essay.replace(" forty-four "," 44 ");
    essay = essay.replace(" forty-three "," 43 ");
    essay = essay.replace(" forty-two "," 42 ");
    essay = essay.replace(" forty-one "," 41 ");
    essay = essay.replace(" forty "," 40 ");
    essay = essay.replace(" thirty-nine "," 39 ");
    essay = essay.replace(" thirty-eight "," 38 ");
    essay = essay.replace(" thirty-seven "," 37 ");
    essay = essay.replace(" thirty-six "," 36 ");
    essay = essay.replace(" thirty-five "," 35 ");
    essay = essay.replace(" thirty-four "," 34 ");
    essay = essay.replace(" thirty-three "," 33 ");
    essay = essay.replace(" thirty-two "," 32 ");
    essay = essay.replace(" thirty-one "," 31 ");
    essay = essay.replace(" thirty "," 30 ");
    essay = essay.replace(" twenty-nine "," 29 ");
    essay = essay.replace(" twenty-eight "," 28 ");
    essay = essay.replace(" twenty-seven "," 27 ");
    essay = essay.replace(" twenty-six "," 26 ");
    essay = essay.replace(" twenty-five "," 25 ");
    essay = essay.replace(" twenty-four "," 24 ");
    essay = essay.replace(" twenty-three "," 23 ");
    essay = essay.replace(" twenty-two "," 22 ");
    essay = essay.replace(" twenty-one "," 21 ");
    essay = essay.replace(" twenty "," 20 ");
    essay = essay.replace(" nineteen "," 19 ");
    essay = essay.replace(" eighteen "," 18 ");
    essay = essay.replace(" seventeen "," 17 ");
    essay = essay.replace(" sixteen "," 16 ");
    essay = essay.replace(" fifteen "," 15 ");
    essay = essay.replace(" fourteen "," 14 ");
    essay = essay.replace(" thirteen "," 13 ");
    essay = essay.replace(" twelve "," 12 ");
    essay = essay.replace(" eleven "," 11 ");

    return essay
    
}
function shortenransition(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.replace("correspondingly","additionally");
        essay = essay.replace("one example that personifies this is","for example");
        essay = essay.replace("one instance that personifies this is","for instance");

    }
    if(random === 2) {
        essay = essay.replace("in addition","also");
        essay = essay.replace("in addition","and");
        essay = essay.replace("as a consequence","thus");
        essay = essay.replace("comparatively","additionally");
        essay = essay.replace("in the instance that","if");
        essay = essay.replace("one example that shows this is","for example");
        essay = essay.replace("one instance that shows this is","for instance");
        essay = essay.replace("last of all","last");
        


    }
    essay = essay.replace("for the reason that","because");
    essay = essay.replace("additionally","also");
    essay = essay.replace("additionally","and");
    essay = essay.replace("and so and so forth","etc");
    essay = essay.replace("extraordinarily","very");
    essay = essay.replace("obviously","clearly");
    essay = essay.replace("consequently","thus");
    essay = essay.replace("in the same fashion","additionally");
    essay = essay.replace("however","but");
    essay = essay.replace("in the event that","if");
    essay = essay.replace("one example that illustrates this is","for example");
    essay = essay.replace("one instance that illustrates this is","for instance");
    essay = essay.replace("ultimately","last");
    essay = essay.replace("first of all","first");
    essay = essay.replace("consequently","next");
    return essay;
}



function finalshorten(essay){
    essay = essay.replacenumbers(essay);
    essay = essay.replacemath(essay);
    essay = essay.replacetransition(essay);
    return essay;
}


