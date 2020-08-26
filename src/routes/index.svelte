<script>
  import { onMount } from "svelte";

  let index = {};
  let names = []

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
  h1 {
    text-align: center;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>Braap!</title>
</svelte:head>

<h1>Motorcycle Service Information</h1>

<ul>
  {#each names as name}
    <li>
      <a href="viewer?moto={encodeURIComponent(index[name].location)}">
        {name}
      </a>
    </li>
  {/each}
</ul>
