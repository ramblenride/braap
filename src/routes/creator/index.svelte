<script>
  let name = "";
  let description = "";

  function download(filename, text) {
    let element = document.createElement("a");
    element.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function handleSave() {
    let motorcycle = {
      name: name,
      description: description,
      tasks: [],
    };

    const template = {
      motorcycles: [motorcycle],
    };

    // Strip the first word and replace spaces
    let filename = `${name}.json`.replace(/\w+ /, '').replace(/ /g, '_').toLowerCase();

    download(
      filename,
      JSON.stringify(
        template,
        (key, value) => {
          if (value !== null && String(value).length != 0 && String(value) !== "NaN") return value;
        },
        2
      )
    );
  }
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

<svelte:head>
  <title>Braap! - Creator</title>
</svelte:head>

<h1>Motorcycle Service Information</h1>
<h1>Creator</h1>

<form on:submit|preventDefault="{handleSave}" autocomplete="off">
  <label>
    Name:
    <input
      bind:value="{name}"
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
      bind:value="{description}"
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
