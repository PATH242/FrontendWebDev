import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const Bio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Bio:</h3>
<p>3rd year computer science student at innopolis university
</p>`;
});
const Comic_svelte_svelte_type_style_lang = "";
const css = {
  code: "#joke.svelte-fihely{display:flex;flex-direction:column;align-items:center;flex-wrap:wrap}",
  map: null
};
const Comic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let img;
  let alt;
  let day;
  let month;
  let year;
  let image_date;
  let comicDateAr;
  let comicDateEng;
  let { comic } = $$props;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  if ($$props.comic === void 0 && $$bindings.comic && comic !== void 0)
    $$bindings.comic(comic);
  $$result.css.add(css);
  ({ title, img, alt, day, month, year } = comic);
  image_date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  comicDateAr = image_date.toLocaleDateString("ar-EG", options);
  comicDateEng = image_date.toLocaleDateString("en-US", options);
  return `<div id="joke" class="svelte-fihely"><h3>${escape(title)}</h3>
  <img${add_attribute("src", img, 0)}${add_attribute("alt", alt, 0)}>
  <h4>${escape(comicDateAr)} ${escape(comicDateEng)}</h4>
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p>${validate_component(Bio, "Bio").$$render($$result, {}, {}, {})}
  ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
  ${validate_component(Comic, "Comic").$$render($$result, { comic: data.comic }, {}, {})}</p>
<h3>Connect on:</h3>`;
});
export {
  Page as default
};
