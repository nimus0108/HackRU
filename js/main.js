$(document).ready(function(){
    $("#submitbutton").click(function(){
        var essay= $("#textinput").val();
        console.log(essay);
        
            $("#longer").click(function(){
        finalreplace(essay);
        
        
    });
    test();
    $("#shorter").click(function(){
        finalshorten(essay);
        
        });

        
    });
});



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
function test(essay){
    essay = essay.toLowerCase();
    console.log(essay);
}
function shortennumbers(essay){
    essay = essay.toLowerCase().replace(" one hundred "," 100 ");
    essay = essay.toLowerCase().replace(" ninety-nine "," 99 ");
    essay = essay.toLowerCase().replace(" ninety-eight "," 98 ");
    essay = essay.toLowerCase().replace(" ninety-seven "," 97 ");
    essay = essay.toLowerCase().replace(" ninety-six "," 96 ");
    essay = essay.toLowerCase().replace(" ninety-five "," 95 ");
    essay = essay.toLowerCase().replace(" ninety-four "," 94 ");
    essay = essay.toLowerCase().replace(" ninety-three "," 93 ");
    essay = essay.toLowerCase().replace(" ninety-two "," 92 ");
    essay = essay.toLowerCase().replace(" ninety-two "," 91 ");
    essay = essay.toLowerCase().replace(" ninety "," 90 ");
    essay = essay.toLowerCase().replace(" eighty-nine "," 89 ");
    essay = essay.toLowerCase().replace(" eighty-eight "," 88 ");
    essay = essay.toLowerCase().replace(" eighty-seven "," 87 ");
    essay = essay.toLowerCase().replace(" eighty-six "," 86 ");
    essay = essay.toLowerCase().replace(" eighty-five "," 85 ");
    essay = essay.toLowerCase().replace(" eighty-four "," 84 ");
    essay = essay.toLowerCase().replace(" eighty-three "," 83 ");
    essay = essay.toLowerCase().replace(" eighty-two "," 82 ");
    essay = essay.toLowerCase().replace(" eighty-one "," 81 ");
    essay = essay.toLowerCase().replace(" eighty "," 80 ");
    essay = essay.toLowerCase().replace(" seventy-nine "," 79 ");
    essay = essay.toLowerCase().replace(" seventy-eight "," 78 ");
    essay = essay.toLowerCase().replace(" seventy-seven "," 77 ");
    essay = essay.toLowerCase().replace(" seventy-seven "," 76 ");
    essay = essay.toLowerCase().replace(" seventy-five "," 75 ");
    essay = essay.toLowerCase().replace(" seventy-four "," 74 ");
    essay = essay.toLowerCase().replace(" seventy-three "," 73 ");
    essay = essay.toLowerCase().replace(" seventy-two "," 72 ");
    essay = essay.toLowerCase().replace(" seventy-one "," 71 ");
    essay = essay.toLowerCase().replace(" seventy "," 70 ");
    essay = essay.toLowerCase().replace(" sixty-nine "," 69 ");
    essay = essay.toLowerCase().replace(" sixty-eight "," 68 ");
    essay = essay.toLowerCase().replace(" sixty-seven "," 67 ");
    essay = essay.toLowerCase().replace(" sixty-six "," 66 ");
    essay = essay.toLowerCase().replace(" sixty-five "," 65 ");
    essay = essay.toLowerCase().replace(" sixty-four "," 64 ");
    essay = essay.toLowerCase().replace(" sixty-three "," 63 ");
    essay = essay.toLowerCase().replace(" sixty-two "," 62 ");
    essay = essay.toLowerCase().replace(" sixty-one "," 61 ");
    essay = essay.toLowerCase().replace(" sixty "," 60 ");
    essay = essay.toLowerCase().replace(" fifty-nine "," 59 ");
    essay = essay.toLowerCase().replace(" fifty-eight "," 58 ");
    essay = essay.toLowerCase().replace(" fifty-seven "," 57 ");
    essay = essay.toLowerCase().replace(" fifty-six "," 56 ");
    essay = essay.toLowerCase().replace(" fifty-five "," 55 ");
    essay = essay.toLowerCase().replace(" fifty-four "," 54");
    essay = essay.toLowerCase().replace(" fifty-three "," 53 ");
    essay = essay.toLowerCase().replace(" fifty-two "," 52 ");
    essay = essay.toLowerCase().replace(" fifty-one "," 51 ");
    essay = essay.toLowerCase().replace(" fifty "," 50 ");
    essay = essay.toLowerCase().replace(" forty-nine "," 49 ");
    essay = essay.toLowerCase().replace(" forty-eight "," 48 ");
    essay = essay.toLowerCase().replace(" forty-seven "," 47 ");
    essay = essay.toLowerCase().replace(" forty-six "," 46 ");
    essay = essay.toLowerCase().replace(" forty-five "," 45 ");
    essay = essay.toLowerCase().replace(" forty-four "," 44 ");
    essay = essay.toLowerCase().replace(" forty-three "," 43 ");
    essay = essay.toLowerCase().replace(" forty-two "," 42 ");
    essay = essay.toLowerCase().replace(" forty-one "," 41 ");
    essay = essay.toLowerCase().replace(" forty "," 40 ");
    essay = essay.toLowerCase().replace(" thirty-nine "," 39 ");
    essay = essay.toLowerCase().replace(" thirty-eight "," 38 ");
    essay = essay.toLowerCase().replace(" thirty-seven "," 37 ");
    essay = essay.toLowerCase().replace(" thirty-six "," 36 ");
    essay = essay.toLowerCase().replace(" thirty-five "," 35 ");
    essay = essay.toLowerCase().replace(" thirty-four "," 34 ");
    essay = essay.toLowerCase().replace(" thirty-three "," 33 ");
    essay = essay.toLowerCase().replace(" thirty-two "," 32 ");
    essay = essay.toLowerCase().replace(" thirty-one "," 31 ");
    essay = essay.toLowerCase().replace(" thirty "," 30 ");
    essay = essay.toLowerCase().replace(" twenty-nine "," 29 ");
    essay = essay.toLowerCase().replace(" twenty-eight "," 28 ");
    essay = essay.toLowerCase().replace(" twenty-seven "," 27 ");
    essay = essay.toLowerCase().replace(" twenty-six "," 26 ");
    essay = essay.toLowerCase().replace(" twenty-five "," 25 ");
    essay = essay.toLowerCase().replace(" twenty-four "," 24 ");
    essay = essay.toLowerCase().replace(" twenty-three "," 23 ");
    essay = essay.toLowerCase().replace(" twenty-two "," 22 ");
    essay = essay.toLowerCase().replace(" twenty-one "," 21 ");
    essay = essay.toLowerCase().replace(" twenty "," 20 ");
    essay = essay.toLowerCase().replace(" nineteen "," 19 ");
    essay = essay.toLowerCase().replace(" eighteen "," 18 ");
    essay = essay.toLowerCase().replace(" seventeen "," 17 ");
    essay = essay.toLowerCase().replace(" sixteen "," 16 ");
    essay = essay.toLowerCase().replace(" fifteen "," 15 ");
    essay = essay.toLowerCase().replace(" fourteen "," 14 ");
    essay = essay.toLowerCase().replace(" thirteen "," 13 ");
    essay = essay.toLowerCase().replace(" twelve "," 12 ");
    essay = essay.toLowerCase().replace(" eleven "," 11 ");

    return essay
    
}
function shortenransition(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.toLowerCase().replace("correspondingly","additionally");
        essay = essay.toLowerCase().replace("one example that personifies this is","for example");
        essay = essay.toLowerCase().replace("one instance that personifies this is","for instance");

    }
    if(random === 2) {
        essay = essay.toLowerCase().replace("in addition","also");
        essay = essay.toLowerCase().replace("in addition","and");
        essay = essay.toLowerCase().replace("as a consequence","thus");
        essay = essay.toLowerCase().replace("comparatively","additionally");
        essay = essay.toLowerCase().replace("in the instance that","if");
        essay = essay.toLowerCase().replace("one example that shows this is","for example");
        essay = essay.toLowerCase().replace("one instance that shows this is","for instance");
        essay = essay.toLowerCase().replace("last of all","last");
        


    }
    essay = essay.toLowerCase().replace("for the reason that","because");
    essay = essay.toLowerCase().replace("additionally","also");
    essay = essay.toLowerCase().replace("additionally","and");
    essay = essay.toLowerCase().replace("and so and so forth","etc");
    essay = essay.toLowerCase().replace("extraordinarily","very");
    essay = essay.toLowerCase().replace("obviously","clearly");
    essay = essay.toLowerCase().replace("consequently","thus");
    essay = essay.toLowerCase().replace("in the same fashion","additionally");
    essay = essay.toLowerCase().replace("however","but");
    essay = essay.toLowerCase().replace("in the event that","if");
    essay = essay.toLowerCase().replace("one example that illustrates this is","for example");
    essay = essay.toLowerCase().replace("one instance that illustrates this is","for instance");
    essay = essay.toLowerCase().replace("ultimately","last");
    essay = essay.toLowerCase().replace("first of all","first");
    essay = essay.toLowerCase().replace("consequently","next");
    return essay;
}

function finalshorten(essay){
    essay = replacenumbers(essay);
    essay = replacemath(essay);
    essay = replacetransition(essay);
    var lowercase=[". a", ". b", ". c", ". d", ". e", ". f", ". g", ". h", ". i", ". j",
                   ". k", ". l", ". m", ". n", ". o", ". p", ". q", ". r", ". s", ". t",
                   ". u", ". v", ". x", ". y", ". z", ".  a", ". b", ".  c", ".  d", ".  e", 
                   ".  f", ".  g", ".  h", ".  i", ".  j", ".  k", ".  l", ".  m", ".  n", 
                   ".  o", ".  p", ".  q", ".  r", ".  s", ".  t", ".  u", ".  v", ".  x", 
                   ".  y", ".  z", "? a", "? b", "? c", "? d", "? e", "? f", "? g", "? h", 
                   "? i", "? j","? k", "? l", "? m", "? n", "? o", "? p", "? q", "? r", 
                   "? s", "? t","? u", "? v", "? x", "? y", "? z", "?  a", "? b", "?  c", 
                   "?  d", "?  e", "?  f", "?  g", "?  h", "?  i", "?  j", "?  k", "?  l", 
                   "?  m", "?  n", "?  o", "?  p", "?  q", "?  r", "?  s", "?  t", "?  u", 
                   "?  v", "?  x", "?  y", "?  z", "! a", "! b", "! c", "! d", "! e", "! f",
                   "! g", "! h", "! i", "! j", "! k", "! l", "! m", "! n", "! o", "! p", "! q",
                   "! r", "! s", "! t", "! u", "! v", "! x", "! y", "! z", "!  a", "! b", "!  c",
                   "!  d", "!  e", "!  f", "!  g", "!  h", "!  i", "!  j", "!  k", "!  l", "!  m",
                   "!  n", "!  o", "!  p", "!  q", "!  r", "!  s", "!  t", "!  u", "!  v", "!  x", 
                   "!  y", "!  z"];
    var uppercase = [". A", ". B", ". C", ". D", ". E", ". F", ". G", ". H", ". I", ". J",
                   ". K", ". L", ". M", ". N", ". O", ". P", ". Q", ". R", ". S", ". T",
                   ". U", ". V", ". X", ". Y", ". Z", ".  A", ". B", ".  C", ".  D", ".  E", 
                   ".  F", ".  G", ".  H", ".  I", ".  J", ".  K", ".  L", ".  M", ".  N", 
                   ".  O", ".  P", ".  Q", ".  R", ".  S", ".  T", ".  U", ".  V", ".  X", 
                   ".  Y", ".  Z", "? A", "? B", "? C", "? D", "? E", "? F", "? G", "? H", 
                   "? I", "? J","? K", "? L", "? M", "? N", "? O", "? P", "? Q", "? R", 
                   "? S", "? T","? U", "? V", "? X", "? Y", "? Z", "?  A", "? B", "?  C", 
                   "?  D", "?  E", "?  F", "?  G", "?  H", "?  I", "?  J", "?  K", "?  L", 
                   "?  M", "?  N", "?  O", "?  P", "?  Q", "?  R", "?  S", "?  T", "?  U", 
                   "?  V", "?  X", "?  Y", "?  Z", "! A", "! B", "! C", "! D", "! E", "! F",
                   "! G", "! H", "! I", "! J", "! K", "! L", "! M", "! N", "! O", "! P", "! Q",
                   "! R", "! S", "! T", "! U", "! V", "! X", "! Y", "! Z", "!  A", "! B", "!  C",
                   "!  D", "!  E", "!  F", "!  G", "!  H", "!  I", "!  J", "!  K", "!  L", "!  M",
                   "!  N", "!  O", "!  P", "!  Q", "!  R", "!  S", "!  T", "!  U", "!  V", "!  X", 
                   "!  Y", "!  Z"];
    for(x=0; x<lowercase.length;x++){
        essay=essay.replace(lowercase[x],uppercase[x]);
    }
    return essay;
}

function replacemath(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.toLowerCase().replace("+", "added with");
    }
    else if(random === 2) {
        essay = essay.toLowerCase().replace("+", "plus");
    }
    
    essay = essay.toLowerCase().replace("%"," percent");
    essay = essay.toLowerCase().replace(" ÷"," divided by");
    essay = essay.toLowerCase().replace("=","equals");
    essay = essay.toLowerCase().replace("&","and");
    essay = essay.toLowerCase().replace("minus","subtracted by");
    essay = essay.toLowerCase().replace(" -"," subtracted by");
    essay = essay.toLowerCase().replace(" x "," multiplied by ");
    essay = essay.toLowerCase().replace(" *"," multiplied by");
    essay = essay.toLowerCase().replace(" /"," divided by");
    essay = essay.toLowerCase().replace("^","raised to the power of");
    
    return essay;
}
function replacenumbers(essay){
    essay = essay.toLowerCase().replace(" 100 "," one hundred ");
    essay = essay.toLowerCase().replace(" 99 "," ninety-nine ");
    essay = essay.toLowerCase().replace(" 98 "," ninety-eight ");
    essay = essay.toLowerCase().replace(" 97 "," ninety-seven ");
    essay = essay.toLowerCase().replace(" 96 "," ninety-six ");
    essay = essay.toLowerCase().replace(" 95 "," ninety-five ");
    essay = essay.toLowerCase().replace(" 94 "," ninety-four ");
    essay = essay.toLowerCase().replace(" 93 "," ninety-three ");
    essay = essay.toLowerCase().replace(" 92 "," ninety-two ");
    essay = essay.toLowerCase().replace(" 91 "," ninety-one ");
    essay = essay.toLowerCase().replace(" 90 "," ninety ");
    essay = essay.toLowerCase().replace(" 89 "," eighty-nine ");
    essay = essay.toLowerCase().replace(" 88 "," eighty-eight ");
    essay = essay.toLowerCase().replace(" 87 "," eighty-seven ");
    essay = essay.toLowerCase().replace(" 86 "," eighty-six ");
    essay = essay.toLowerCase().replace(" 85 "," eighty-five ");
    essay = essay.toLowerCase().replace(" 84 "," eighty-four ");
    essay = essay.toLowerCase().replace(" 83 "," eighty-three ");
    essay = essay.toLowerCase().replace(" 82 "," eighty-two ");
    essay = essay.toLowerCase().replace(" 81 "," eighty-one ");
    essay = essay.toLowerCase().replace(" 80 "," eighty ");
    essay = essay.toLowerCase().replace(" 79 "," seventy-nine ");
    essay = essay.toLowerCase().replace(" 78 "," seventy-eight ");
    essay = essay.toLowerCase().replace(" 77 "," seventy-seven ");
    essay = essay.toLowerCase().replace(" 76 "," seventy-six ");
    essay = essay.toLowerCase().replace(" 75 "," seventy-five ");
    essay = essay.toLowerCase().replace(" 74 "," seventy-four ");
    essay = essay.toLowerCase().replace(" 73 "," seventy-three ");
    essay = essay.toLowerCase().replace(" 72 "," seventy-two ");
    essay = essay.toLowerCase().replace(" 71 "," seventy-one ");
    essay = essay.toLowerCase().replace(" 70 "," seventy ");
    essay = essay.toLowerCase().replace(" 69 "," sixty-nine ");
    essay = essay.toLowerCase().replace(" 68 "," sixty-eight ");
    essay = essay.toLowerCase().replace(" 67 "," sixty-seven ");
    essay = essay.toLowerCase().replace(" 66 "," sixty-six ");
    essay = essay.toLowerCase().replace(" 65 "," sixty-five ");
    essay = essay.toLowerCase().replace(" 64 "," sixty-four ");
    essay = essay.toLowerCase().replace(" 63 "," sixty-three ");
    essay = essay.toLowerCase().replace(" 62 "," sixty-two ");
    essay = essay.toLowerCase().replace(" 61 "," sixty-one ");
    essay = essay.toLowerCase().replace(" 60 "," sixty ");
    essay = essay.toLowerCase().replace(" 59 "," fifty-nine ");
    essay = essay.toLowerCase().replace(" 58 "," fifty-eight ");
    essay = essay.toLowerCase().replace(" 57 "," fifty-seven ");
    essay = essay.toLowerCase().replace(" 56 "," fifty-six ");
    essay = essay.toLowerCase().replace(" 55 "," fifty-five ");
    essay = essay.toLowerCase().replace(" 54"," fifty-four ");
    essay = essay.toLowerCase().replace(" 53 "," fifty-three ");
    essay = essay.toLowerCase().replace(" 52 "," fifty-two ");
    essay = essay.toLowerCase().replace(" 51 "," fifty-one ");
    essay = essay.toLowerCase().replace(" 50 "," fifty ");
    essay = essay.toLowerCase().replace(" 49 "," forty-nine ");
    essay = essay.toLowerCase().replace(" 48 "," forty-eight ");
    essay = essay.toLowerCase().replace(" 47 "," forty-seven ");
    essay = essay.toLowerCase().replace(" 46 "," forty-six ");
    essay = essay.toLowerCase().replace(" 45 "," forty-five ");
    essay = essay.toLowerCase().replace(" 44 "," forty-four ");
    essay = essay.toLowerCase().replace(" 43 "," forty-three ");
    essay = essay.toLowerCase().replace(" 42 "," forty-two ");
    essay = essay.toLowerCase().replace(" 41 "," forty-one ");
    essay = essay.toLowerCase().replace(" 40 "," forty ");
    essay = essay.toLowerCase().replace(" 39 "," thirty-nine ");
    essay = essay.toLowerCase().replace(" 38 "," thirty-eight ");
    essay = essay.toLowerCase().replace(" 37 "," thirty-seven ");
    essay = essay.toLowerCase().replace(" 36 "," thirty-six ");
    essay = essay.toLowerCase().replace(" 35 "," thirty-five ");
    essay = essay.toLowerCase().replace(" 34 "," thirty-four ");
    essay = essay.toLowerCase().replace(" 33 "," thirty-three ");
    essay = essay.toLowerCase().replace(" 32 "," thirty-two ");
    essay = essay.toLowerCase().replace(" 31 "," thirty-one ");
    essay = essay.toLowerCase().replace(" 30 "," thirty ");
    essay = essay.toLowerCase().replace(" 29 "," twenty-nine ");
    essay = essay.toLowerCase().replace(" 28 "," twenty-eight ");
    essay = essay.toLowerCase().replace(" 27 "," twenty-seven ");
    essay = essay.toLowerCase().replace(" 26 "," twenty-six ");
    essay = essay.toLowerCase().replace(" 25 "," twenty-five ");
    essay = essay.toLowerCase().replace(" 24 "," twenty-four ");
    essay = essay.toLowerCase().replace(" 23 "," twenty-three ");
    essay = essay.toLowerCase().replace(" 22 "," twenty-two ");
    essay = essay.toLowerCase().replace(" 21 "," twenty-one ");
    essay = essay.toLowerCase().replace(" 20 "," twenty ");
    essay = essay.toLowerCase().replace(" 19 "," nineteen ");
    essay = essay.toLowerCase().replace(" 18 "," eighteen ");
    essay = essay.toLowerCase().replace(" 17 "," seventeen ");
    essay = essay.toLowerCase().replace(" 16 "," sixteen ");
    essay = essay.toLowerCase().replace(" 15 "," fifteen ");
    essay = essay.toLowerCase().replace(" 14 "," fourteen ");
    essay = essay.toLowerCase().replace(" 13 "," thirteen ");
    essay = essay.toLowerCase().replace(" 12 "," twelve ");
    essay = essay.toLowerCase().replace(" 11 "," eleven ");
    essay = essay.toLowerCase().replace(" 10 "," ten ");
    essay = essay.toLowerCase().replace(" 9 " ," nine ");
    essay = essay.toLowerCase().replace(" 8 "," eight ");
    essay = essay.toLowerCase().replace(" 7 "," seven ");
    essay = essay.toLowerCase().replace(" 6 "," six ");
    essay = essay.toLowerCase().replace(" 5 "," five ");
    essay = essay.toLowerCase().replace(" 4 "," four ");
    essay = essay.toLowerCase().replace(" 3 "," three ");
    essay = essay.toLowerCase().replace(" 2 "," two ");
    essay = essay.toLowerCase().replace(" 1 "," one ");
    return essay
    
}
function replacetransition(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.toLowerCase().replace("thus","therefore");
        essay = essay.toLowerCase().replace("additionally","correspondingly");
        essay = essay.toLowerCase().replace("for example","one example that personifies this is");
        essay = essay.toLowerCase().replace("for instance","one instance that personifies this is");

    }
    if(random === 2) {
        essay = essay.toLowerCase().replace("also","in addition");
        essay = essay.toLowerCase().replace("and","in addition");
        essay = essay.toLowerCase().replace("thus","as a consequence");
        essay = essay.toLowerCase().replace("additionally","comparatively");
        essay = essay.toLowerCase().replace("if","in the instance that");
        essay = essay.toLowerCase().replace("for example","one example that shows this is");
        essay = essay.toLowerCase().replace("for instance","one instance that shows this is");
        essay = essay.toLowerCase().replace("last","last of all");


    }
    essay = essay.toLowerCase().replace("because","for the reason that");
    essay = essay.toLowerCase().replace("also","additionally");
    essay = essay.toLowerCase().replace("and","additionally");
    essay = essay.toLowerCase().replace("etc","and so and so forth");
    essay = essay.toLowerCase().replace("very","extraordinarily");
    essay = essay.toLowerCase().replace("clearly","obviously");
    essay = essay.toLowerCase().replace("thus","consequently");
    essay = essay.toLowerCase().replace("additionally","in the same fashion");
    essay = essay.toLowerCase().replace("but","however");
    essay = essay.toLowerCase().replace("if","in the event that");
    essay = essay.toLowerCase().replace("for example","one example that illustrates this is");
    essay = essay.toLowerCase().replace("for instance","one instance that illustrates this is");
    essay = essay.toLowerCase().replace("last","ultimately");
    essay = essay.toLowerCase().replace("first","first of all");
    essay = essay.toLowerCase().replace("next","consequently");
    return essay;
}

function replacecontractions(essay) {
    essay = essay.replace("hadn't","had not");
    essay = essay.toLowerCase().replace("hasn't","has not");
    essay = essay.toLowerCase().replace("haven't","have not");
    essay = essay.toLowerCase().replace("he'd","he would");
    essay = essay.toLowerCase().replace("he'll","he will");
    essay = essay.toLowerCase().replace("he's","he is");
    essay = essay.toLowerCase().replace("I'd","I would");
    essay = essay.toLowerCase().replace("I'll","I will");
    essay = essay.toLowerCase().replace("I'm","I am");
    essay = essay.toLowerCase().replace("I've","I have");
    essay = essay.toLowerCase().replace("isn't","is not");
    essay = essay.toLowerCase().replace("it'd","it would");
    essay = essay.toLowerCase().replace("it'll","it will");
    essay = essay.toLowerCase().replace("it's","it is");
    essay = essay.toLowerCase().replace("let's","let us");
    essay = essay.toLowerCase().replace("mightn't","might not");
    essay = essay.toLowerCase().replace("might've","might have");
    essay = essay.toLowerCase().replace("mustn't","must not");
    essay = essay.toLowerCase().replace("must've","must have");
    essay = essay.toLowerCase().replace("needn't","need not");
    essay = essay.toLowerCase().replace("not've","not have");
    essay = essay.toLowerCase().replace("she'd","she would");
    essay = essay.toLowerCase().replace("she'll","she will");
    essay = essay.toLowerCase().replace("she's","she is");
    essay = essay.toLowerCase().replace("should've","should have");
    essay = essay.toLowerCase().replace("shouldn't","shouldn't");
    essay = essay.toLowerCase().replace("it'll","it will");
    essay = essay.toLowerCase().replace("that's","that is");
    essay = essay.toLowerCase().replace("there'd","there would");
    essay = essay.toLowerCase().replace("there're","there are");
    essay = essay.toLowerCase().replace("there's","there is");
    essay = essay.toLowerCase().replace("they'd","should have");
    essay = essay.toLowerCase().replace("they'll","they will");
    essay = essay.toLowerCase().replace("they've","they have");
    essay = essay.toLowerCase().replace("we'd","we would");
    essay = essay.toLowerCase().replace("we'll","we will");
    essay = essay.toLowerCase().replace("we're","we are");
    essay = essay.toLowerCase().replace("we've","we have");
    essay = essay.toLowerCase().replace("weren't","were not");
    essay = essay.toLowerCase().replace("what'll","what will");
    essay = essay.toLowerCase().replace("what're","what are");
    essay = essay.toLowerCase().replace("what's","what is");
    essay = essay.toLowerCase().replace("what've","what have");
    essay = essay.toLowerCase().replace("when's","when is");
    essay = essay.toLowerCase().replace("where'd","where did");
    essay = essay.toLowerCase().replace("where's","where is");
    essay = essay.toLowerCase().replace("where've","where have");
    essay = essay.toLowerCase().replace("who'd","who would");
    essay = essay.toLowerCase().replace("who'll","who will");
    essay = essay.toLowerCase().replace("who're","who are");
    essay = essay.toLowerCase().replace("who's","who is");
    essay = essay.toLowerCase().replace("who've","who've");
    essay = essay.toLowerCase().replace("won't","will not");
    essay = essay.toLowerCase().replace("would've","would have");
    essay = essay.toLowerCase().replace("wouldn't","would not");
    essay = essay.toLowerCase().replace("you'd","you would");
    essay = essay.toLowerCase().replace("you'll","who will");
    essay = essay.toLowerCase().replace("you're","you are");
    essay = essay.toLowerCase().replace("you've","you have");
    return essay;
}

function finalreplace(essay){
    //essay.replacenumbers or replacenumbers?
    essay = replacenumbers(essay);
    essay = replacemath(essay);
    essay = replacetransition(essay);
    essay = replacecontractions(essay);
    console.log(essay);
    
    var lowercase=[". a", ". b", ". c", ". d", ". e", ". f", ". g", ". h", ". i", ". j",
                   ". k", ". l", ". m", ". n", ". o", ". p", ". q", ". r", ". s", ". t",
                   ". u", ". v", ". x", ". y", ". z", ".  a", ". b", ".  c", ".  d", ".  e", 
                   ".  f", ".  g", ".  h", ".  i", ".  j", ".  k", ".  l", ".  m", ".  n", 
                   ".  o", ".  p", ".  q", ".  r", ".  s", ".  t", ".  u", ".  v", ".  x", 
                   ".  y", ".  z", "? a", "? b", "? c", "? d", "? e", "? f", "? g", "? h", 
                   "? i", "? j","? k", "? l", "? m", "? n", "? o", "? p", "? q", "? r", 
                   "? s", "? t","? u", "? v", "? x", "? y", "? z", "?  a", "? b", "?  c", 
                   "?  d", "?  e", "?  f", "?  g", "?  h", "?  i", "?  j", "?  k", "?  l", 
                   "?  m", "?  n", "?  o", "?  p", "?  q", "?  r", "?  s", "?  t", "?  u", 
                   "?  v", "?  x", "?  y", "?  z", "! a", "! b", "! c", "! d", "! e", "! f",
                   "! g", "! h", "! i", "! j", "! k", "! l", "! m", "! n", "! o", "! p", "! q",
                   "! r", "! s", "! t", "! u", "! v", "! x", "! y", "! z", "!  a", "! b", "!  c",
                   "!  d", "!  e", "!  f", "!  g", "!  h", "!  i", "!  j", "!  k", "!  l", "!  m",
                   "!  n", "!  o", "!  p", "!  q", "!  r", "!  s", "!  t", "!  u", "!  v", "!  x", 
                   "!  y", "!  z"];
    var uppercase = [". A", ". B", ". C", ". D", ". E", ". F", ". G", ". H", ". I", ". J",
                   ". K", ". L", ". M", ". N", ". O", ". P", ". Q", ". R", ". S", ". T",
                   ". U", ". V", ". X", ". Y", ". Z", ".  A", ". B", ".  C", ".  D", ".  E", 
                   ".  F", ".  G", ".  H", ".  I", ".  J", ".  K", ".  L", ".  M", ".  N", 
                   ".  O", ".  P", ".  Q", ".  R", ".  S", ".  T", ".  U", ".  V", ".  X", 
                   ".  Y", ".  Z", "? A", "? B", "? C", "? D", "? E", "? F", "? G", "? H", 
                   "? I", "? J","? K", "? L", "? M", "? N", "? O", "? P", "? Q", "? R", 
                   "? S", "? T","? U", "? V", "? X", "? Y", "? Z", "?  A", "? B", "?  C", 
                   "?  D", "?  E", "?  F", "?  G", "?  H", "?  I", "?  J", "?  K", "?  L", 
                   "?  M", "?  N", "?  O", "?  P", "?  Q", "?  R", "?  S", "?  T", "?  U", 
                   "?  V", "?  X", "?  Y", "?  Z", "! A", "! B", "! C", "! D", "! E", "! F",
                   "! G", "! H", "! I", "! J", "! K", "! L", "! M", "! N", "! O", "! P", "! Q",
                   "! R", "! S", "! T", "! U", "! V", "! X", "! Y", "! Z", "!  A", "! B", "!  C",
                   "!  D", "!  E", "!  F", "!  G", "!  H", "!  I", "!  J", "!  K", "!  L", "!  M",
                   "!  N", "!  O", "!  P", "!  Q", "!  R", "!  S", "!  T", "!  U", "!  V", "!  X", 
                   "!  Y", "!  Z"];
    for(x=0; x<lowercase.length;x++){
        essay=essay.replace(lowercase[x],uppercase[x]);
    }

        
        

        
    this.$('#output').html(essay)
    
    return essay;
}
    