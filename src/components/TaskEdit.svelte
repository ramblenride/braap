<script>
  import LinkEdit from "./LinkEdit.svelte";
  import { onMount } from "svelte";

  export let onRemove;
  export let task = {};
  task.links = task.links === undefined ? [] : task.links;
  let active = true;
  let nameField;

  onMount(() => {
    // Workaround: Changing focus on mount breaks a11y so Sapper doesn't support it.
    setTimeout(() => {
      nameField.focus();
    }, 200);
  });

  function handleAddLink() {
    task.links = task.links.concat({});
  }

  function handleRemoveLink(link) {
    task.links = task.links.filter((arrayLink) => {
      return arrayLink != link;
    });
  }

  function handleInvalid() {
    // Expand the panel when an input is flagged as invalid
    active = true;
  }
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  .accordion {
    color: #becdda;
    background-color: #1b3e56;
    cursor: pointer;
    padding: 10px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    font-size: medium;
  }

  .panel {
    background-color: rgba(255, 255, 255, 0.25);
    padding: 0 15px;
    overflow: hidden;
    margin: 0 10px;
    display: block;
  }

  .hidden {
    display: none;
  }

  .accordion:after {
    content: "\02795"; /* Unicode character for "plus" sign (+) */
    float: right;
    color: transparent;
    text-shadow: 0 0 0 grey;
  }

  .active:after {
    content: "\2796"; /* Unicode character for "minus" sign (-) */
    color: transparent;
    text-shadow: 0 0 0 grey;
  }

  .close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 1px 0 #000000;
    opacity: 0.5;
    margin-right: 15px;
  }

  .horizontalForms {
    display: flex;
    flex-wrap: wrap;
  }

  .halfSize {
    flex: 1;
  }
</style>

<div>
  <button
    type="button"
    class:active
    class="accordion"
    on:click="{() => {
      active = !active;
    }}">
    {task.name || ''} - {task.description || ''}
    {#if task.technicalLevel}
      <span class="level {task.technicalLevel}">{task.technicalLevel}</span>
    {/if}
  </button>

  <div class="panel {!active ? 'hidden' : ''}">
    <span class="close" on:click="{onRemove(task)}">x</span>
    <label>
      Name / Theme:
      <input
        bind:this={nameField}
        bind:value="{task.name}"
        on:invalid="{handleInvalid}"
        class="rounded-input"
        required="true"
        type="text"
        maxlength="40"
        autocomplete="off"
        placeholder="Ex: Engine oil" />
    </label>
    <br />
    <label>
      Description:
      <input
        bind:value="{task.description}"
        on:invalid="{handleInvalid}"
        class="rounded-input"
        required="true"
        type="text"
        maxlength="120"
        placeholder="Ex: Replace the engine oil and filter." />
    </label>
    <label>
      Technical Level:
      <select class="rounded-input" bind:value="{task.technicalLevel}">
        <option selected></option>
        <option>easy</option>
        <option>intermediate</option>
        <option>pro</option>
      </select>
    </label>

    <div class="horizontalForms">
      <label class="halfSize" style="margin-top: auto;">
        Fixed distance (KM):
        <input bind:value="{task.km}" class="rounded-input" type="number" maxlength="7" />
      </label>

      <label class="halfSize" style="margin-left: 5px; margin-top: auto;">
        Fixed months:
        <input bind:value="{task.months}" class="rounded-input" type="number" maxlength="4" />
      </label>
    </div>

    <div class="horizontalForms">
      <label class="halfSize" style="margin-top: auto;">
        Recurring distance (KM):
        <input
          bind:value="{task.intervalKm}"
          class="rounded-input"
          type="number"
          style="margin-right: 5px"
          maxlength="7" />
      </label>

      <label class="halfSize" style="margin-left: 5px; margin-top: auto;">
        Recurring months:
        <input
          bind:value="{task.intervalMonths}"
          class="rounded-input"
          type="number"
          maxlength="4" />
      </label>
    </div>

    <label>
      Notes:
      <textarea
        bind:value="{task.notes}"
        class="rounded-input"
        type="text"
        rows="4"
        maxlength="2000"></textarea>
    </label>

    <h3>Links:</h3>
    <p>
      {#each task.links as link}
        <LinkEdit onRemove="{handleRemoveLink}" on:invalid="{handleInvalid}" {link} />
      {/each}
    </p>
    <p>
      <button type="button" on:click="{handleAddLink}">Add Link</button>
    </p>
  </div>
</div>
