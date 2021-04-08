<script>
  import parser from "./parser.min";

  export let source;

  $: ast = parser(source);
</script>

{JSON.stringify(ast)}
