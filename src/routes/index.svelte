<script>
  import { onMount } from "svelte";

  let index = {};
  let names = [];

  onMount(async () => {
    return fetch(
      "https://ramblenride.github.io/motorcycle-service-db/motorcycle-service-index.json"
    )
      .then((r) => r.json())
      .then((data) => {
        index = data;
        names = Array.from(Object.keys(data)).sort();
      });
  });
</script>

<style>
</style>

<svelte:head>
  <title>Braap! - Viewer</title>
</svelte:head>

<h1>Motorcycle Service Information</h1>
<h1>Viewer</h1>

<ul>
  {#each names as name}
    <li>
      <a href="viewer?moto={encodeURIComponent(index[name].location)}">{name}</a>
    </li>
  {/each}
</ul>
