<script>
  export let motorcycles = [];
</script>

<style>
  li {
    padding: 5px;
  }
</style>

<slot>
    <h1>Motorcycle List</h1>
</slot>

<ul>
  {#each motorcycles as motorcycle}
    <li>
      <a href="viewer?motorcycle={encodeURIComponent(motorcycle.location)}">{motorcycle.name}</a>
    </li>
  {/each}
</ul>
