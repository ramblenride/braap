<script>
  export let motorcycle = {};
  export let onSubmit;
  let name = "";
  let description = "";
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  .rounded-input {
    padding: 10px;
    border-radius: 10px;
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
  <br />
  <br />

  <button type="submit">Download</button>
</form>
