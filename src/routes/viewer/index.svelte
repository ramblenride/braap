<script context="module">
  export async function preload({ params, query }) {
    const moto = query["moto"];
    const res = await this.fetch(
      `https://ramblenride.github.io/motorcycle-service-db/${moto}`
    );
    const data = await res.json();
    if (res.status === 200) {
      const template = Object.values(data.motorcycles)[0];
      template.tasks.sort((a, b) => a.name.localeCompare(b.name));
      return { template: template };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import TaskView from "../../components/TaskView.svelte";
  export let template;
</script>

<style>
  h1 {
    position: relative;
    text-align: center;
  }
  h3 {
    position: relative;
    text-align: center;
  }

  hr.solid {
    border-top: thin groove currentColor;
  }
</style>

<svelte:head>
  <title>{template.name}</title>
</svelte:head>

<h1>{template.name}</h1>
<h3>{template.description}</h3>
<hr class="solid" />

{#each template.tasks as task}
  <TaskView {task} />
{/each}
