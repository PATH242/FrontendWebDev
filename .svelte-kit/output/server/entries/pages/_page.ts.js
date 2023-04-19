async function getComicID(fetch) {
  const id_url = "https://fwd.innopolis.app/api/hw2?email=m.awadallah@innopolis.university";
  let response = await fetch(id_url);
  let responseData = await response.json();
  let comic_id = Number(responseData);
  console.log(comic_id);
  return comic_id;
}
async function getComic(comic_id, fetch) {
  var comic_url = "https://getxkcd.vercel.app/api/comic?num=" + comic_id;
  let response = await fetch(comic_url);
  let responseData = await response.json();
  return responseData;
}
const load = async ({ fetch }) => {
  const id = await getComicID(fetch);
  const comic = await getComic(id, fetch);
  console.log(comic);
  return {
    comic
  };
};
export {
  load
};
