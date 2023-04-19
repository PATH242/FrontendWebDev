export interface comicAPI {
  title: string
  img: string
  alt: string
  year: string
  month: string
  day: string
}

export async function getComicID(fetch: any) {
  const id_url =
    'https://fwd.innopolis.app/api/hw2?email=m.awadallah@innopolis.university'
  let response: Response = await fetch(id_url)
  let responseData = await response.json()
  let comic_id = Number(responseData)
  console.log(comic_id)
  return comic_id
}

export async function getComic(comic_id: number, fetch: any) {
  var comic_url: string = 'https://getxkcd.vercel.app/api/comic?num=' + comic_id
  let response: Response = await fetch(comic_url)
  let responseData: comicAPI = await response.json()
  return responseData
}
