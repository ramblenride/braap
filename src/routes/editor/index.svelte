<script>
  import MotorcycleEdit from "../../components/MotorcycleEdit.svelte";
  import { download, getFilename, motorcycleToJson } from "../_helpers/download.js";

  let files = [];
  let motorcycle;

  function handleDownload() {
    const filename = getFilename(motorcycle);

    download(filename, motorcycleToJson(motorcycle));
  }

  function handleImport() {
    if (files.length <= 0) {
      return false;
    }

    const reader = new FileReader();
    reader.onerror = function (e) {
      alert("Failed to load the file");
    };
    reader.onload = function (e) {
      try {
        const tempMoto = JSON.parse(e.target.result);
        if (tempMoto["motorcycles"] === undefined || tempMoto["motorcycles"].length != 1) {
          alert("Invalid JSON file. Could not find the motorcycle list.");
        } else {
          motorcycle = tempMoto.motorcycles[0];
          if (motorcycle["name"] === undefined || motorcycle["description"] === undefined) {
            motorcycle = undefined;
            alert("Invalid JSON file. Could not find a valid motorcycle.");
          }
        }
      } catch (e) {
        alert("Failed to parse imported JSON file:", e);
      }
    };

    reader.readAsText(files.item(0));
  }
</script>

<style>
  .horizontalForms {
    display: flex;
    flex-wrap: wrap;
  }

  .largeSize {
    flex: 3;
  }

  .smallSize {
    flex: 1;
  }
</style>

<svelte:head>
  <title>Braap! - Editor</title>
  <meta name="description" content="An editor for motorcycle service intervals">
</svelte:head>

<h1>Motorcycle Service Information</h1>
<h2>Editor</h2>

{#if motorcycle !== undefined}
  <MotorcycleEdit onSubmit="{handleDownload}" {motorcycle} />
{:else}
  <h3>Import from an existing file</h3>
  <div class="horizontalForms">
  <input type="file" class="rounded-input largeSize" accept="application/json" bind:files />
  <button type="submit" class="smallSize" on:click="{handleImport}">Import</button>
</div>
{/if}
