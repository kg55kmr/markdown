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

  export let source;
  export let components = {};

  $: ast = parser(source).children;
  $: defaultComponents = { p: P, ol: Ol, ul: Ul, li: Li, a: A };
  $: allComponents = {
    ...defaultComponents,
    ...globalComponents,
    ...components,
  };
</script>

<Parser {ast} components={allComponents} />
