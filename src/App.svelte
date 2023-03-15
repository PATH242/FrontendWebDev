<script lang="ts">
  import Bio from './lib/Bio.svelte'
  import Projects from './lib/Projects.svelte'
  import Comic from './lib/Comic.svelte'
  import Footer from './lib/Footer.svelte'
</script>

<head>
    <title>portfolio</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script src="dist/bundle.js"></script>
</head>
<body>
    <header>
        <h1>Menna A. Awadallah</h1>
    </header>
    <Bio/>
    <Projects/>
    <Comic/>
    <main>
        <h3>Connect on:</h3>   
    </main>
    <Footer />
</body>