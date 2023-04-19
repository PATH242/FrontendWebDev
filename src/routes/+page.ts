import { getComic, getComicID } from '$lib/comic'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const id = await getComicID(fetch)
  const comic = await getComic(id, fetch)
  return {
    comic,
  };
}
