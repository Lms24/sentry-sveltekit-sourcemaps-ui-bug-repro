<script lang="ts">
	function throwTestError() {
		throw new Error('Source-mapped Test Error');
	}
</script>

<p>
	This error will be source-mapped but Sentry will still show the source maps wizard box as if it
	wasn't source-mapped.
</p>
<button on:click={throwTestError}> Throw Test Error </button>
