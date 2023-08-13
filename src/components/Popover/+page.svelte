<script lang="ts">
	import { onMount } from 'svelte';

	let popoverOpen = false;

	function togglePopover() {
		popoverOpen = !popoverOpen;
	}

	onMount(() => {
		document.addEventListener('click', (event) => {
			const popover = document.getElementById('popover');
			if (popover && !popover.contains(event.target as Element)) {
				popoverOpen = false;
			}
		});
	});
</script>

<button class="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded" on:click={togglePopover}>
	Toggle Popover
</button>

{#if popoverOpen}
	<div
		class="absolute top-0 right-0 mt-12 mr-2 bg-white border border-gray-300 rounded shadow-md p-4"
		id="popover"
	>
		<p>This is a popover!</p>
	</div>
{/if}

<style>
	.popover {
		position: absolute;
		top: 0;
		right: 0;
		margin-top: 12px;
		margin-right: 2px;
		background-color: white;
		border: 1px solid gray;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		padding: 16px;
	}
</style>
