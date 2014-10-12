$(document).ready(function(){
    $("#submitbutton").click(function(){
        var essay= $("#textinput").val();
        console.log(essay);
        
            $("#longer").click(function(){
        finalreplace(essay);
        
        
    });
    
    $("#shorter").click(function(){
        finalshorten(essay);
        
        });

        
    });
});



function shortenmath(essay) {
    var random = Math.floor((Math.random() * 2) + 1);
    if (random === 1) { 
        essay = essay.replace( " added with", " +");
    }
    else if(random === 2) {
        essay = essay.replace(" plus"," +");
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
    essay = essay.replace(" raised to the power of"," ^");
    essay = essay.replace(" to the power of"," ^");
    
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
        essay = essay.replace(" correspondingly "," additionally ");
        essay = essay.replace(" one example that personifies this is "," for example ");
        essay = essay.replace(" one instance that personifies this is "," for instance ");

    }
    if(random === 2) {
        essay = essay.replace(" in addition "," also ");
        essay = essay.replace(" in addition "," and ");
        essay = essay.replace(" as a consequence "," thus ");
        essay = essay.replace(" comparatively "," additionally ");
        essay = essay.replace(" in the instance that "," if ");
        essay = essay.replace(" one example that shows this is "," for example ");
        essay = essay.replace(" one instance that shows this is "," for instance ");
        essay = essay.replace(" last of all "," last ");
        


    }
    essay = essay.replace(" for the reason that "," because ");
    essay = essay.replace(" additionally "," also ");
    essay = essay.replace(" additionally "," and ");
    essay = essay.replace(" and so and so forth "," etc. ");
    essay = essay.replace(" extraordinarily "," very ");
    essay = essay.replace(" obviously "," clearly" );
    essay = essay.replace(" consequently "," thus ");
    essay = essay.replace(" in the same fashion "," additionally ");
    essay = essay.replace(" however "," but ");
    essay = essay.replace(" in the event that "," if ");
    essay = essay.replace(" one example that illustrates this is "," for example ");
    essay = essay.replace(" one instance that illustrates this is "," for instance ");
    essay = essay.replace(" ultimately "," last ");
    essay = essay.replace(" first of all "," first ");
    essay = essay.replace(" consequently "," next ");
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
        essay = essay.replace("+", "added with");
    }
    else if(random === 2) {
        essay = essay.replace("+", "plus");
    }
    
    essay = essay.replace(" %"," percent");
    essay = essay.replace(" ÷"," divided by");
    essay = essay.replace("=","equals");
    essay = essay.replace("&","and");
    essay = essay.replace(" minus","subtracted by");
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
        essay = essay.replace(" thus "," therefore ");
        essay = essay.replace(" additionally "," correspondingly ");
        essay = essay.replace(" for example "," one example that personifies this is ");
        essay = essay.replace(" for instance "," one instance that personifies this is ");

    }
    if(random === 2) {
        essay = essay.replace(" also "," in addition ");
        essay = essay.replace(" and "," in addition ");
        essay = essay.replace(" thus "," as a consequence ");
        essay = essay.replace(" additionally "," comparatively ");
        essay = essay.replace(" if "," in the instance that ");
        essay = essay.replace(" for example "," one example that shows this is ");
        essay = essay.replace(" for instance "," one instance that shows this is ");
        essay = essay.replace(" last "," last of all ");


    }
    essay = essay.replace(" because "," for the reason that ");
    essay = essay.replace(" also "," additionally ");
    essay = essay.replace(" and "," additionally ");
    essay = essay.replace(" etc "," and so and so forth ");
    essay = essay.replace(" etc. "," and so and so forth ");
    essay = essay.replace(" very "," extraordinarily ");
    essay = essay.replace(" clearly "," obviously ");
    essay = essay.replace(" thus "," consequently ");
    essay = essay.replace(" additionally "," in the same fashion ");
    essay = essay.replace(" but "," however ");
    essay = essay.replace(" if "," in the event that ");
    essay = essay.replace(" for example "," one example that illustrates this is ");
    essay = essay.replace(" for instance "," one instance that illustrates this is ");
    essay = essay.replace(" last "," ultimately ");
    essay = essay.replace(" first "," first of all ");
    essay = essay.replace(" next "," consequently ");
    return essay;
}

function replacecontractions(essay) {
    essay = essay.replace(" hadn't "," had not ");
    essay = essay.replace(" hasn't "," has not ");
    essay = essay.replace(" haven't ","have not ");
    essay = essay.replace(" he'd "," he would ");
    essay = essay.replace(" he'll "," he will ");
    essay = essay.replace(" he's "," he is ");
    essay = essay.replace(" I'd "," I would ");
    essay = essay.replace(" I'll "," I will ");
    essay = essay.replace(" I'm "," I am ");
    essay = essay.replace(" I've "," I have ");
    essay = essay.replace(" isn't "," is not ");
    essay = essay.replace(" it'd "," it would ");
    essay = essay.replace(" it'll "," it will ");
    essay = essay.replace(" it's "," it is ");
    essay = essay.replace(" let's "," let us ");
    essay = essay.replace(" mightn't "," might not ");
    essay = essay.replace(" might've "," might have ");
    essay = essay.replace(" mustn't "," must not ");
    essay = essay.replace(" must've "," must have ");
    essay = essay.replace(" needn't "," need not ");
    essay = essay.replace(" not've "," not have ");
    essay = essay.replace(" she'd "," she would ");
    essay = essay.replace(" she'll "," she will ");
    essay = essay.replace(" she's "," she is ");
    essay = essay.replace(" should've "," should have ");
    essay = essay.replace(" shouldn't "," shouldn't ");
    essay = essay.replace(" it'll "," it will ");
    essay = essay.replace(" that's "," that is ");
    essay = essay.replace(" there'd "," there would ");
    essay = essay.replace(" there're "," there are ");
    essay = essay.replace(" there's "," there is ");
    essay = essay.replace(" they'd "," should have ");
    essay = essay.replace(" they'll "," they will ");
    essay = essay.replace(" they've "," they have ");
    essay = essay.replace(" we'd "," we would ");
    essay = essay.replace(" we'll "," we will ");
    essay = essay.replace(" we're "," we are ");
    essay = essay.replace(" we've "," we have ");
    essay = essay.replace(" weren't "," were not ");
    essay = essay.replace(" what'll "," what will ");
    essay = essay.replace(" what're "," what are ");
    essay = essay.replace(" what's "," what is ");
    essay = essay.replace(" what've "," what have ");
    essay = essay.replace(" when's "," when is ");
    essay = essay.replace(" where'd "," where did ");
    essay = essay.replace(" where's "," where is ");
    essay = essay.replace(" where've "," where have ");
    essay = essay.replace(" who'd "," who would ");
    essay = essay.replace(" who'll "," who will ");
    essay = essay.replace(" who're "," who are ");
    essay = essay.replace(" who's "," who is ");
    essay = essay.replace(" who've "," who've ");
    essay = essay.replace(" won't "," will not ");
    essay = essay.replace(" would've "," would have ");
    essay = essay.replace(" wouldn't "," would not ");
    essay = essay.replace(" you'd "," you would ");
    essay = essay.replace(" you'll "," who will ");
    essay = essay.replace(" you're "," you are ");
    essay = essay.replace(" you've "," you have ");
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
    console.log(essay);

        
        

        
    this.$('#output').html(essay)
    
    return essay;
}
    