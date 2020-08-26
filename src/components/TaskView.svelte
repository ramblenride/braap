<script>
  export let task;
  let active = false;
</script>

<style>
  .accordion {
    color: #becdda;
    background-color: #1b3e56;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    font-size: medium;
  }

  .panel {
    padding: 0 18px;
    overflow: hidden;
    margin-left: 25px;
    display: block;
    border-width: thin thin;
    border-style: solid;
  }

  .hidden {
    display: none;
  }

  .level {
    font-size: smaller;
    font-weight: bold;
    float: inline-end;
    text-transform: uppercase;
    border-width: thin thin;
    border-style: solid;
    padding: 2px;
  }

  .pro {
    color: #ff0000;
  }

  .intermediate {
    color: #f76522;
  }

  .easy {
    color: #1a9b00;
  }

  .accordion:after {
    content: "\02795"; /* Unicode character for "plus" sign (+) */
    float: right;
  }

  .active:after {
    content: "\2796"; /* Unicode character for "minus" sign (-) */
  }

  .notes {
    font-size: 14px;
    padding: 5px 5px;
  }
</style>

<div class="box">
  <button
    class:active
    class="accordion"
    on:click="{() => {
      active = !active;
    }}">
    {task.name} - {task.description}
    {#if task.level}
      <span class="level {task.level}">{task.level}</span>
    {/if}
  </button>

  <div class="panel {!active ? 'hidden' : ''}">
    {#if task.intervalKm || task.intervalMonths}
      <p>
        Service Interval:
        {#if task.intervalKm}{task.intervalKm} km{/if}
        {#if task.intervalKm && task.intervalMonths}/{/if}
        {#if task.intervalMonths}{task.intervalMonths} months{/if}
      </p>
    {/if}
    {#if task.km || task.months}
      <p>
        Fixed Service:
        {#if task.km}{task.km} km{/if}
        {#if task.km && task.months}/{/if}
        {#if task.months}{task.months} months{/if}
      </p>
    {/if}
    {#if task.links}
      <ul>
        {#each task.links as attachment}
          <li>
            <a href="{attachment.url}">{attachment.name}</a>
          </li>
        {/each}
      </ul>
    {/if}
    {#if task.notes}
      Notes:
      <!-- FIXME: Notes are not formatted correctly (\n not handled) -->
      <div class="notes">{task.notes}</div>
    {/if}
  </div>
</div>
