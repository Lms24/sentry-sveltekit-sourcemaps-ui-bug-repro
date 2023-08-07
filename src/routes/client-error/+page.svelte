<script lang="ts">
	function throwTestError() {
		throw new Error('Source-mapped Client Error');
	}
</script>

<p>This error from the client should be source-mapped</p>
<button on:click={throwTestError}> Throw Test Error </button>
