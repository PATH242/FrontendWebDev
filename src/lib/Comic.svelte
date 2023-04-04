<div id='joke'>
    <h3>{image_title}</h3>
    <img src={image_url} alt={image_alt}>
    <h4>{comic_date_ar} {comic_date_eng}</h4>
</div>
<script lang="ts">
    import type { comicAPI } from "./comic";
    import loading from "../assets/loading.jpg"
    // Get a random number to be used as an XKCD comic identifier.
    export async function getComicID(){
        const id_url  = 'https://fwd.innopolis.app/api/hw2?email=m.awadallah@innopolis.university';
        let response : Response = await fetch(id_url);
        let responseData = await response.json();
        let comic_id  = Number(responseData);
        console.log(comic_id)
        return comic_id;
    }
    let image_title  = "Loading comic";
    let image_url : string = loading;
    let image_alt  = "loading";
    let comic_date_ar : string, comic_date_eng : string;
    // Get image, its name, its alt text, and its date from XKCD API using fetch.
    export async function getComic(comic_id : number){
        var comic_url : string = 'https://getxkcd.vercel.app/api/comic?num=' + comic_id;
        let response : Response = await fetch(comic_url);
        let responseData  : comicAPI = await response.json();
        image_title = responseData.title;
        image_url = responseData.img;
        image_alt = responseData.alt;
        const image_year : number = parseInt(responseData.year), image_month : number = parseInt(responseData.month), image_day = parseInt(responseData.day);
        const image_date : Date = new Date(image_year, image_month -1, image_day);
        const options  = {
            weekday : "long" as const,
            year : "numeric" as const,
            month : "long" as const,
            day : "numeric" as const
        }
        comic_date_ar = image_date.toLocaleDateString("ar-EG", options);
        comic_date_eng = image_date.toLocaleDateString("en-US", options);
        return;
    }

    getComicID().then(comic_id => processComicID(comic_id)).catch(err => console.log(err.message));
    //export async function load() {
    //  getComicID().then(comic_id => processComicID(comic_id)).catch(err => console.log(err.message));
    //}
    export function processComicID(comic_id : number){
        console.log(comic_id);
        getComic(comic_id).catch(err => console.log(err.message));
    }
  </script>
<style>
    #joke{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    }
</style>