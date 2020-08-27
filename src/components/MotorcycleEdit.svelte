<script>
  import TaskEditor from "./TaskEditor.svelte";

  export let onSubmit;
  export let motorcycle = {};
  motorcycle.tasks = [];

  function handleAddTask() {
    motorcycle.tasks = motorcycle.tasks.concat({});
  }

  function handleRemoveTask(task) {
    motorcycle.tasks = motorcycle.tasks.filter((arrayTask) => {
      return arrayTask != task;
    });
  }
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
</style>

<form on:submit|preventDefault="{onSubmit}" autocomplete="off">
  <label>
    Name:
    <input
      bind:value="{motorcycle.name}"
      class="rounded-input"
      required="true"
      type="text"
      maxlength="40"
      autocomplete="off"
      placeholder="Ex: Honda Africa Twin 2016-2019" />
  </label>
  <br />
  <label>
    Description:
    <input
      bind:value="{motorcycle.description}"
      class="rounded-input"
      required="true"
      type="text"
      maxlength="120"
      placeholder="Ex: All variants of the Honda Africa Twin (CRF1000L) from 2016 to 2019." />
  </label>
  <h3>Tasks:</h3>
  <p>
    {#each motorcycle.tasks as task}
      <TaskEditor onRemove="{handleRemoveTask}" {task} />
    {/each}
  </p>
  <p>
    <button type="button" on:click="{handleAddTask}">Add Task</button>
  </p>
  <p>
    <button type="submit">Download (as JSON)</button>
  </p>
</form>
