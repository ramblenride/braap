<script>
  import { onMount } from "svelte";

  export let onRemove;
  export let link = {};
  let active = true;
  let nameField;

  onMount(() => {
    // Workaround: Changing focus on mount breaks a11y so Sapper doesn't support it.
    setTimeout(() => {
      nameField.focus();
    }, 200);
  });
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
    background-color: rgba(255, 255, 255, 0.15);
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
  }

  .active:after {
    content: "\2796"; /* Unicode character for "minus" sign (-) */
  }

  .close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 1px 0 #000000;
    opacity: 0.5;
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
    {link.name || '-'}
  </button>

  <div class="panel {!active ? 'hidden' : ''}">
    <span class="close" on:click="{onRemove(link)}">x</span>
    <label>
      Name:
      <input
        bind:this="{nameField}"
        bind:value="{link.name}"
        class="rounded-input"
        required="true"
        type="text"
        maxlength="32"
        autocomplete="off"
        placeholder="Ex: Video how-to" />
    </label>
    <br />
    <label>
      URL:
      <input
        bind:value="{link.url}"
        class="rounded-input"
        required="true"
        type="url"
        maxlength="64"
        placeholder="Ex: https://example.com" />
    </label>
  </div>
</div>
