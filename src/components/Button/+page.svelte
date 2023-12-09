<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	const RightIcon = '/icons/right.svg';

	interface $$Props extends HTMLButtonAttributes {
		label: string;
		disabled?: boolean;
		link?: string;
		target?: string;
	}

	export let label: string;
	export let disabled = false;
	export let link = '';
	export let target = '_blank';
</script>

<div class="flex items-center h-[40px] sm:h-[50px] md:h-[55px] w-[180px] sm:w-[200px] md:w-[250px]">
	{#if link}
		<a class="w-[90%] h-full" href={link} {target} rel="noopener noreferrer">
			<div
				class="flex items-center justify-center bg-primary text-white text-sm sm:text-base font-light mr-2 h-full w-[100%]"
			>
				{label}
			</div>
		</a>
		<img alt="right" class="h-[35px] sm:h-[auto]" src={RightIcon} />
	{:else}
		<button
			class="bg-primary text-white text-sm sm:text-base font-light mr-2 h-full w-[90%] disabled:opacity-50 disabled:bg-slate-500 disabled:cursor-not-allowed"
			{disabled}
			{...$$restProps}>{label}</button
		>
		{#if !disabled}
			<img alt="right" class="h-[35px] sm:h-[auto]" src={RightIcon} />
		{/if}
	{/if}
</div>
