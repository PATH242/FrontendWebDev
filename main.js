async function getComicID(){
    const id_url = 'https://fwd.innopolis.app/api/hw2?email=m.awadallah@innopolis.university';
    let response = await fetch(id_url);
    let comic_id = await response.text();
    return comic_id;
}
async function getComic(comic_id){
    var comic_url = 'https://getxkcd.vercel.app/api/comic?num=' + comic_id;
    let response = await fetch(comic_url);
    let data = await response.json();
    const image_title = data.title;
    const image_url = data.img;
    const image_alt = data.alt;
    const image_year = data.year, image_month = data.month, image_day = data.day;
    const image_date = new Date(image_year, image_month -1, image_day);
    const options = {
        weekday : "long",
        year : "numeric",
        month : "long",
        day : "numeric"
    }
    const comic_date_ar = image_date.toLocaleDateString("ar-EG", options);
    const comic_date_eng = image_date.toLocaleDateString("en-US", options);

    const comic_h3 = document.createElement('h3');
    const comic_title = document.createTextNode(image_title);
    document.getElementById('joke').appendChild(comic_title);
    comic_h3.appendChild(comic_title);
    document.getElementById('joke').appendChild(comic_h3);

    const comic = document.createElement('img');
    comic.src = image_url;
    comic.alt = image_alt;
    document.getElementById('joke').appendChild(comic);
    
   const comic_h4 = document.createElement('h4');
   const comic_alt = document.createTextNode(image_alt);
   comic_h4.appendChild(comic_alt);
   document.getElementById('joke').appendChild(comic_h4);

   const comic_h5 = document.createElement('h5');
   const comic_date = document.createTextNode(comic_date_ar + " " + comic_date_eng); 
   comic_h5.appendChild(comic_date);
   document.getElementById('joke').appendChild(comic_h5);
   return;
}

getComicID().then(comic_id => processComicID(comic_id)).catch(err => console.log(err.message));
function processComicID(comic_id){
    console.log(comic_id);
    getComic(comic_id).catch(err => console.log(err.message));
}