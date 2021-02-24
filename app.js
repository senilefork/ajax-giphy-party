const form = document.querySelector('#form');
const input = document.querySelector('#input');
const clear = document.querySelector('#clear');
let section = document.querySelector('#section');
let div =document.querySelector('#div');
let count = 0;


async function getGiph(giph){
    let key = '8qKvKEwL2y0FihjYkFAZJq69UFbTKl02'
    let url = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${giph}&limit=10`)
    let randomIndex = Math.floor(Math.random()*10)
    
    //console.log(url.data.data.url)
    //debugger
    let img = document.createElement('IMG');
    
    img.setAttribute("src" , url.data.data[randomIndex].images.original.url);
    img.setAttribute("class", "img")
   //console.log(img.src)
    div.append(img);
    
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    getGiph(input.value);
    input.value='';
    count++;
    console.log(count)

})



clear.addEventListener('click',function(){
    for(let i = 1; i <= count; i++){
        let img = document.querySelector('.img')
        div.removeChild(img);
        
    }
    count=0;
})


//8qKvKEwL2y0FihjYkFAZJq69UFbTKl02 'https://media1.giphy.com/media/xUPGcyi4YxcZp8dWZq/giphy.gif?cid=60b0bb9634vzsbk5joepmxdhzqnlj63wme02vpjbtq0i322m&rid=giphy.gif'
