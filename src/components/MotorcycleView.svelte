<script>
  import TaskView from "./TaskView.svelte";
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

<h1>{moto.name}</h1>
<h3>{moto.description}</h3>
<hr class="solid" />

{#each moto.tasks as task}
  <TaskView {task} />
{/each}
