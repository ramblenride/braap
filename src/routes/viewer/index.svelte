<script context="module">
  export async function preload({ params, query }) {
    const name = query["motorcycle"];
    if (name !== undefined) {
      const motorcycle = await fetchMotorcycle(name, this.fetch);
      return {
        motorcycle: motorcycle,
        motorcycleName: name,
        error: undefined
      };
    } else {
      const motoList = await fetchMotoList(this.fetch);
      return {
        motorcycleName: undefined,
        motorcycle: undefined,
        motorcycles: motoList,
        error: undefined
      };
    }
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import { onMount, beforeUpdate } from "svelte";
  import { stores } from "@sapper/app";

  import { fetchMotorcycle, fetchMotoList } from "../_helpers/fetch.js";
  import MotorcycleView from "../../components/MotorcycleView.svelte";
  import MotorcycleList from "../../components/MotorcycleList.svelte";

  export let motorcycles = [];
  export let motorcycle;
  export let motorcycleName;
  export let error;
  const { page } = stores();

  onMount(async () => {
    const name = $page.query["motorcycle"];
    await setupPage(name);
  });

  async function setupPage(name) {
    if (name !== undefined) {
      try {
        motorcycleName = name;
        motorcycle = await fetchMotorcycle(name);
        error = undefined;
      } catch (err) {
        error = {
          response: { statusText: err.message },
          message: "Failed to download motorcycle service information",
        };
        motorcycle = undefined;
        motorcycleName = undefined;
      }
    } else {
      motorcycle = undefined;
      motorcycleName = undefined;
    }
  }
</script>

<svelte:head>
  <title>Braap! - {motorcycle !== undefined ? motorcycle.name : 'Viewer'}</title>
  <meta name="description" content="A viewer for motorcycle service intervals" />
</svelte:head>

{#if error !== undefined}
  <h1>Error - {error.response.status}</h1>
  <p>{error.message}</p>
  <p>{error.response.statusText}</p>
{:else if motorcycleName !== undefined}
  {#if motorcycle !== undefined}
    <p in:fade>
      <MotorcycleView {motorcycle} />
    </p>
  {/if}
{:else if motorcycles !== undefined && motorcycleName === undefined}
  <p>
    <MotorcycleList {motorcycles}>
      <h1>Motorcycle Service Information</h1>
      <h2>Viewer</h2>
    </MotorcycleList>
  </p>
{/if}
