<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		position: relative;
		max-width: 56em;
		text-align: center;
		padding: 2em;
      	font-size: 0.8em;
      	margin: 0 auto;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	<i><strong>Disclaimer</strong></i><br>
	<i> Motorcycle service templates are provided by users of the <a href="https://github.com/ramblenride/motorcycle-service-db">Motorcycle Service Database</a>.
		We cannot be held responsible for any error they may contain. Always refer to the user manual for accurate information.</i>
</footer>
