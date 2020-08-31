<script>
  import TaskView from "./TaskView.svelte";
  import { download, getFilename, motorcycleToJson } from "../routes/_helpers/download.js";

  export let motorcycle;

  function handleDownload() {
    const filename = getFilename(motorcycle);

    download(filename, motorcycleToJson(motorcycle));
  }
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

<h1>{motorcycle.name}</h1>
<h3>{motorcycle.description}</h3>
<hr class="solid" />

{#each motorcycle.tasks as task}
  <TaskView {task} />
{/each}

<button type="submit" on:click="{handleDownload}">Download (as JSON)</button>
