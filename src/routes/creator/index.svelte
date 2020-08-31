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
  <meta name="description" content="An editor for motorcycle service intervals" />
</svelte:head>

<h1>Motorcycle Service Information</h1>
<h2>Creator</h2>

<MotorcycleEdit onSubmit="{handleDownload}" {motorcycle} />
