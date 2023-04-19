<script lang="ts">
  import type { comicAPI } from './comic'

  export let comic: comicAPI

  $: ({ title, img, alt, day, month, year } = comic)
  $: image_date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))

  const options = {
    weekday: 'long' as const,
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
  }
  $: comicDateAr = image_date.toLocaleDateString('ar-EG', options)
  $: comicDateEng = image_date.toLocaleDateString('en-US', options)
</script>

<div id="joke">
  <h3>{title}</h3>
  <img src={img} {alt} />
  <h4>{comicDateAr} {comicDateEng}</h4>
</div>

<style>
  #joke {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
