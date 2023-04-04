import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const Bio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Bio:</h3>
<p>3rd year computer science student at innopolis university
</p>`;
});
const loading = "/PATH242.github.io/_app/immutable/assets/loading.1e745bb5.jpg";
const Comic_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#joke.svelte-14aprtu{display:flex;flex-direction:column;align-items:center;flex-wrap:wrap}",
  map: null
};
async function getComicID() {
  const id_url = "https://fwd.innopolis.app/api/hw2?email=m.awadallah@innopolis.university";
  let response = await fetch(id_url);
  let responseData = await response.json();
  let comic_id = Number(responseData);
  console.log(comic_id);
  return comic_id;
}
const Comic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image_title = "Loading comic";
  let image_url = loading;
  let image_alt = "loading";
  let comic_date_ar, comic_date_eng;
  async function getComic(comic_id) {
    var comic_url = "https://getxkcd.vercel.app/api/comic?num=" + comic_id;
    let response = await fetch(comic_url);
    let responseData = await response.json();
    image_title = responseData.title;
    image_url = responseData.img;
    image_alt = responseData.alt;
    const image_year = parseInt(responseData.year), image_month = parseInt(responseData.month), image_day = parseInt(responseData.day);
    const image_date = new Date(image_year, image_month - 1, image_day);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    comic_date_ar = image_date.toLocaleDateString("ar-EG", options);
    comic_date_eng = image_date.toLocaleDateString("en-US", options);
    return;
  }
  getComicID().then((comic_id) => processComicID(comic_id)).catch((err) => console.log(err.message));
  function processComicID(comic_id) {
    console.log(comic_id);
    getComic(comic_id).catch((err) => console.log(err.message));
  }
  $$result.css.add(css$1);
  return `<div id="joke" class="svelte-14aprtu"><h3>${escape(image_title)}</h3>
    <img${add_attribute("src", image_url, 0)}${add_attribute("alt", image_alt, 0)}>
    <h4>${escape(comic_date_ar)} ${escape(comic_date_eng)}</h4>
</div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Main projects:</h3>
    <ul><li><a href="https://github.com/Maves1/SSADProject">Basic Delivery system</a></li>
        <li><a href="https://github.com/PATH242/System-network-Adminstration-project">Remote file system</a></li>
        <li><a href="https://github.com/PATH242/Accompaniment-Generation">Accompaniment Generation</a></li>
        <li><a href="https://github.com/PATH242/Internship-codes-2021">Multiple worlds modelling of system errors</a></li>
        <li><a href="https://github.com/mariammaher550/raft-grpc">Distributed system using raft algorithm</a></li>
        <li><a href="https://github.com/PATH242/Differential-equations">Differential-equations solver </a></li></ul>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-gm0wqn{font-family:Helvetica;color:rgb(205, 92, 92);background-image:url("../assets/background.jpg");background-repeat:no-repeat;background-size:cover;background-color:#CCCC;min-height:100vb}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-gm0wqn">${validate_component(Bio, "Bio").$$render($$result, {}, {}, {})}
    ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
    ${validate_component(Comic, "Comic").$$render($$result, {}, {}, {})}
    <main><h3>Connect on:</h3></main>
</body>`;
});
export {
  Page as default
};
