async function cod(){
    data = "" 
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '60f6a62be1msh971d4c5cfc1b37ep15e8ffjsn1bc307b553c0',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };
    data = await fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', 
    options)
     result = await data.json();
     console.log(result)
     let myDiv = document.getElementById("demo")
let innerString = ""
let list = result;
list.forEach((element) => {
    let a = element.imgUrl    ;
    innerString += `<img src="${a}" class ="thumbnail"/>`;
})
console.log(innerString);
myDiv.innerHTML = innerString 
}
cod()