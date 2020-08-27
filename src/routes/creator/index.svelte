<script>
  import MotorcycleEdit from "../../components/MotorcycleEdit.svelte";

  let motorcycle = {};

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
    const template = {
      motorcycles: [motorcycle],
    };

    // Strip the first word and replace spaces
    let filename = `${motorcycle.name}`.replace(/\w+ /, "").trim().replace(/ /g, "_").toLowerCase() + '.json';

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

</style>

<svelte:head>
  <title>Braap! - Creator</title>
</svelte:head>

<h1>Motorcycle Service Information</h1>
<h1>Creator</h1>

<MotorcycleEdit onSubmit="{handleSave}" {motorcycle} />
