async function spotify(){
    data = "" 
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '60f6a62be1msh971d4c5cfc1b37ep15e8ffjsn1bc307b553c0',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    data = await fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', 
    options)
        result = await data.json();
        console.log(result)
let myDiv = document.getElementById("demo")
let innerString = ""
let list = result.albums.items;
list.forEach((element) => {
    let imgURL = element.data.coverArt.sources[1].url;
    innerString += `<img src="${imgURL}" class ="thumbnail"/>`;
})
console.log(innerString);
myDiv.innerHTML = innerString 
}
spotify()