<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import { beforeUpdate } from 'svelte';
    import { initAuth } from '$lib/auth';
    //import Comic from '../lib/Comic.svelte'
    //import {getComicID} from '../lib/Comic.svelte';
    //import {processComicID} from '../lib/Comic.svelte';

    beforeUpdate(() => {
        initAuth();
    });
  
  </script>
<Header/>
 <main>   
<slot />
</main>
<Footer />
