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

  .accordion:after {
    content: "\02795"; /* Unicode character for "plus" sign (+) */
    float: right;
    color: transparent;
    text-shadow: 0 0 0 grey;
  }

  .active:after {
    content: "\2796"; /* Unicode character for "minus" sign (-) */
    color: transparent;
    text-shadow: 0 0 0 grey;
  }

  .notes {
    font-size: 14px;
    padding: 5px 5px;
    white-space: pre-wrap;
  }
</style>

<div>
  <button
    class:active
    class="accordion"
    on:click="{() => {
      active = !active;
    }}">
    {task.name} - {task.description}
    {#if task.technicalLevel}
      <span class="level {task.technicalLevel}">{task.technicalLevel}</span>
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
      <div class="notes">{task.notes}</div>
    {/if}
  </div>
</div>
