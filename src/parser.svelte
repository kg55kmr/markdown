<script>
  export let ast;
  export let components;
</script>

{#each ast as node}
  {#if node.type === "text"}
    {node.value}
  {:else if components[node.tagName]}
    <svelte:component this={components[node.tagName]} {...node.properties}>
      {#if node.children}
        <svelte:self ast={node.children} {components} />
      {/if}
    </svelte:component>
  {:else}
    !!! {node.tagName} !!!
  {/if}
{/each}
