<script lang="ts">
    import Bio from "$lib/Bio.svelte";
    import Comic from "$lib/Comic.svelte";
    import Projects from "$lib/Projects.svelte";
</script>

<p>
    <Bio />
    <Projects/>
    <Comic />
    <h3>Connect on:</h3>
<style>
  body{
  font-family: Helvetica;
  color:rgb(205, 92, 92);
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color:#CCCC;
  min-height: 100vb;
}
</style>