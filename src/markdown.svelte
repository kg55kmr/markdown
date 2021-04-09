<script context="module">
  let globalComponents = {};

  export function setGlobalComponents(components) {
    globalComponents = components;
  }
</script>

<script>
  import parser from "./parser.min";

  import Parser from "./parser.svelte";
  import P from "./components/p.svelte";
  import Ol from "./components/ol.svelte";
  import Ul from "./components/ul.svelte";
  import Li from "./components/li.svelte";
  import A from "./components/a.svelte";
  import Img from "./components/img.svelte";
  import Blockquote from "./components/blockquote.svelte";
  import Em from "./components/em.svelte";
  import Strong from "./components/strong.svelte";
  import Hr from "./components/hr.svelte";
  import H1 from "./components/h1.svelte";
  import H2 from "./components/h2.svelte";
  import H3 from "./components/h3.svelte";
  import H4 from "./components/h4.svelte";

  export let source;
  export let components = {};

  $: ast = parser(source).children;
  $: defaultComponents = {
    p: P,
    ol: Ol,
    ul: Ul,
    li: Li,
    a: A,
    img: Img,
    blockquote: Blockquote,
    em: Em,
    strong: Strong,
    hr: Hr,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: Hn,
    h6: Hn,
  };
</script>

<Parser
  {ast}
  components={{
    ...defaultComponents,
    ...globalComponents,
    ...components,
  }}
/>
