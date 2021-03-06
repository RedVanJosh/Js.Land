import { ContentGrid, Footer, Head, Navigation } from "./fragments.js";

const fragmentBundle = {
  ContentGrid: ContentGrid,
  Head: Head,
  Footer: Footer,
  Navigation: Navigation,
};

/** Reads and returns the text content of the given resource **/
async function LoadResource(name, type) {
  const lobotResourcePath = `lobot/${type}/${name}.${type}`;

  return (type === `css`)
    ? `<style>${await Deno.readTextFile(lobotResourcePath)}</style>`
    : (type === `js`)
    ? `<script>${await Deno.readTextFile(lobotResourcePath)}</script>`
    : (type === `txt`)
    ? `<p>${await Deno.readTextFile(lobotResourcePath)}</p>`
    : (type === `json`)
    ? await Deno.readTextFile(lobotResourcePath)
    : null;
}

async function Serve(resource) {
  const name = resource.split(`:`)[0];
  const type = resource.split(`:`)[1];
  if (type === `css` || type === `js` || type === `txt`) {
    return await LoadResource(name, type);
  }
  if (type === `html`) {
    return await fragmentBundle[name];
  }
}

export { Serve };
