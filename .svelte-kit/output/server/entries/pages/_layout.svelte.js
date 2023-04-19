import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
const app = "";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-11i077m{margin-top:auto}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-11i077m"><a id="gh-link" href="https://github.com/PATH242"><img src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Programming-Github-icon.png" alt="github icon" width="25" height="25"></a>
    
    <a id="li-link" href="https://www.linkedin.com/in/menna-awadallah-25a682232/"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" alt="linked-in icon" width="25" height="25"></a>

    <a id="email" href="mailto:mennashaheen2357@gmail.com"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="gmail icon" width="25" height="25"></a> 
</footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><h1>Menna A. Awadallah</h1>
     <a href="${escape(base, true) + "/about"}">About</a></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
 <main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
