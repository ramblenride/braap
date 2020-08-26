<script context="module">
    export function preload({ params, query }) {
      return this.fetch(
        "https://ramblenride.github.io/motorcycle-service-db/motorcycle-service-index.json"
      )
        .then((r) => r.json())
        .then((data) => {
          return {
            index: Array.from(Object.values(data)).sort(
              (a, b) => a.name.localeCompare(b.name))
          };
        });
    }
  </script>
  
  <script>
    export let index;
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
    {#each index as template}
      <li>
        <a
          href="viewer?moto={encodeURIComponent(template.location)}">
          {template.name}
        </a>
      </li>
    {/each}
  </ul>
  