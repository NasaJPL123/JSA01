set = [
    "The Razor Crest","Hogwarts ece","Great Pyramid of Giza",
    "ISS","The Effeil Tower","The Great wall of China","Dubai",
    "Friends","Lego Batmobile","Santa's visit","Santa's workshop"
]
price = [
    500, 400, 450, 400, 450, 500, 550, 470, 450, 700, 600 
]
function buy(){
        document.getElementById("price").innerHTML = document.getElementById("price").innerHTML + price[event.target.className]+"$" + " | ";
        document.getElementById("name").innerHTML = document.getElementById("name").innerHTML+ set[event.target.className] + " | ";
        let num1 = Number(price[event.target.className]);
        let sum = Number(document.getElementById("sum").innerHTML) + num1;
        document.getElementById("sum").innerHTML = sum;
return
}
function back(){
    document.getElementById("price").innerHTML = ""
    document.getElementById("name").innerHTML = ""
    document.getElementById("sum").innerHTML = ""
}








