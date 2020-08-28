<script>
  import MotorcycleEdit from "../../components/MotorcycleEdit.svelte";
  import { download, getFilename, motorcycleToJson } from "../_helpers/download.js";

  let motorcycle = {};

  function handleDownload() {
    const filename = getFilename(motorcycle);

    download(filename, motorcycleToJson(motorcycle));
  }
</script>

<style>

</style>

<svelte:head>
  <title>Braap! - Creator</title>
</svelte:head>

<h1>Motorcycle Service Information</h1>
<h1>Creator</h1>

<MotorcycleEdit onSubmit="{handleDownload}" {motorcycle} />
