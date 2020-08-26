<script context="module">
  export async function preload({ params, query }) {
    const name = query["moto"];
    const res = await this.fetch(`https://ramblenride.github.io/motorcycle-service-db/${name}`);
    const data = await res.json();
    if (res.status === 200) {
      const moto = Object.values(data.motorcycles)[0];
      moto.tasks.sort((a, b) => a.name.localeCompare(b.name));
      return { moto: moto };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import TaskView from "../../components/TaskView.svelte";
  export let moto;
</script>

<style>
  h3 {
    position: relative;
    text-align: center;
  }

  hr.solid {
    border-top: thin groove currentColor;
  }
</style>

<svelte:head>
  <title>Braap! - {moto.name}</title>
</svelte:head>

<h1>{moto.name}</h1>
<h3>{moto.description}</h3>
<hr class="solid" />

{#each moto.tasks as task}
  <TaskView {task} />
{/each}
