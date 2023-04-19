<script lang="ts">
    import '../app.css'
    import Footer from "$lib/Footer.svelte";
    import Header from '$lib/Header.svelte'
    //import Comic from '../lib/Comic.svelte'
    //import {getComicID} from '../lib/Comic.svelte';
    //import {processComicID} from '../lib/Comic.svelte';
  </script>
<Header/>
 <main>   
<slot />
</main>
<Footer />
