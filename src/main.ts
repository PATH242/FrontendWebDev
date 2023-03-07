// Get a random number to be used as an XKCD comic identifier.
interface comicIdAPI{
    text : string;
}
interface comicAPI{
    title : string,
    img : string,
    alt : string,
    year : string,
    month : string,
    day : string;
}
async function getComicID(){
    const id_url : string = 'https://fwd.innopolis.app/api/hw2?email=m.awadallah@innopolis.university';
    let response : Response = await fetch(id_url);
    let data : comicAPI = await response.json();
    let comic_id : number = Number(data);
    console.log(comic_id)
    return comic_id;
}
// Get image, its name, its alt text, and its date from XKCD API using fetch.
async function getComic(comic_id : number){
    var comic_url : string = 'https://getxkcd.vercel.app/api/comic?num=' + comic_id;
    let response : Response = await fetch(comic_url);
    let data  : comicAPI = await response.json();
    const image_title : string = data.title;
    const image_url : string = data.img;
    const image_alt : string = data.alt;
    const image_year : number = parseInt(data.year), image_month : number = parseInt(data.month), image_day : number = parseInt(data.day);
    const image_date : Date = new Date(image_year, image_month -1, image_day);
    const options  = {
        weekday : "long" as const,
        year : "numeric" as const,
        month : "long" as const,
        day : "numeric" as const
    }
    const comic_date_ar : string = image_date.toLocaleDateString("ar-EG", options);
    const comic_date_eng : string = image_date.toLocaleDateString("en-US", options);
    
    
    const comic_h3 = document.createElement('h3');
    const comic_title = document.createTextNode(image_title);
    document.getElementById('joke')?.appendChild(comic_title);

    const joke_element = document.getElementById('joke');
    const comic = document.createElement('img');
    comic.src = image_url;
    comic.alt = image_alt;
    if(joke_element != null)
        joke_element.appendChild(comic);
    
   const comic_h4 = document.createElement('text');
   const comic_alt = document.createTextNode(image_alt);
   comic_h4.appendChild(comic_alt);
   if(joke_element != null)
        joke_element.appendChild(comic_h4);

   const comic_h5 = document.createElement('text');
   const comic_date = document.createTextNode(comic_date_ar + " " + comic_date_eng); 
   comic_h5.appendChild(comic_date);
   if(joke_element != null)
        joke_element.appendChild(comic_h5);
   return;
}

getComicID().then(comic_id => processComicID(comic_id)).catch(err => console.log(err.message));
function processComicID(comic_id : number){
    console.log(comic_id);
    getComic(comic_id).catch(err => console.log(err.message));
}