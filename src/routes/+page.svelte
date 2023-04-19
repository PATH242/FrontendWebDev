<script lang="ts">
  import Bio from '$lib/Bio.svelte'
  import Comic from '$lib/Comic.svelte'
  import Projects from '$lib/Projects.svelte'
  import type { comicAPI } from '$lib/comic'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<p>
  <Bio />
  <Projects />
  <Comic comic={data.comic} />
</p>
<h3>Connect on:</h3>
