<script lang="ts">
	interface $$Props {
		label: string;
	}

	const RightIcon = '/icons/right.svg';
	export let label: string;
</script>

<div class="flex items-center h-[40px] sm:h-[50px] md:h-[55px] w-[180px] sm:w-[200px] md:w-[250px]">
	<button class="bg-primary text-white text-sm sm:text-base font-light mr-2 h-full w-[90%]"
		>{label}</button
	>
	<img alt="right" class="h-[35px] sm:h-[auto]" src={RightIcon} />
</div>
