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

    download(
      `${name}.json`,
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
  <title>Braap! - Editor</title>
</svelte:head>

<h1>Motorcycle Service Information</h1>
<h1>Editor</h1>
<br />
<br />
<h2>Coming soon...</h2>
