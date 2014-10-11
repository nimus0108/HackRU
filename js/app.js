//Essay Shortener!!!!!!!

var sample = "Sample essay.";

function replacemath(essay){
    var random = Math.floor((Math.random() * 2) + 1)
    if random == 1{ 
        essay = essay.replace("+", "added with")
    }
    if random == 2{
        essay = essay.replace("+", "plus")
    }
    essay = essay.replace("%"," percent")
    essay = essay.replace(" ÷"," divided by")
    essay = essay.replace("=","equals")
    essay = essay.replace("&","and")
    essay = essay.replace("minus","subtracted by")
    essay = essay.replace(" -"," subtracted by")
    essay = essay.replace(" x "," multiplied by ")
    essay = essay.replace(" *"," multiplied by")
    essay = essay.replace(" /"," divided by")
    essay = essay.replace("^","raised to the power of")
    return essay
}

