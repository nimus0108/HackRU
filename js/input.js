function input(){
    document.getElementById("submitbutton").onclick=function(){
        var essay= document.getElementById("textinput");
        document.getElementsByClassName("long").onclick=function(){
            return finalreplace(essay);
        }
        document.getElementsByClassName("long").onclick=function(){
            return finalshorten(essay);
        }
    }
}