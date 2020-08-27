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
  import MotorcycleView from "../../components/MotorcycleView.svelte";
  import {download, getFilename, motoToString} from "../_helpers/download.js";
  export let moto;

  function handleDownload() {
    const template = {
      motorcycles: [moto],
    };

    const filename = getFilename(moto);

    download(
      filename,
      motoToString(moto)
    );
  }
</script>

<style>

</style>

<svelte:head>
  <title>Braap! - {moto.name}</title>
</svelte:head>

<MotorcycleView {moto} />
<button type="submit" on:click="{handleDownload}">Download (as JSON)</button>
