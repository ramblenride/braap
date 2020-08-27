<script>
  import MotorcycleEdit from "../../components/MotorcycleEdit.svelte";
  import {download, getFilename, motoToString} from "../_helpers/download.js";

  let motorcycle = {};

  function handleDownload() {
    const template = {
      motorcycles: [motorcycle],
    };

    const filename = getFilename(motorcycle);

    download(
      filename,
      motoToString(motorcycle)
    );
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
