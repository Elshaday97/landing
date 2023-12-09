<script lang="ts">
	import { Button } from '$components';

	interface $$Props {
		productName: string;
		productImage: string;
		properties: string[];
		description: string;
		comingSoon?: boolean;
		link?: string;
	}

	export let productName: string;
	export let productImage: string;
	export let comingSoon = false;
	export let properties: string[];
	export let description: string;
	export let link = '';
</script>

<div
	class="relative flex flex-col sm:flex-row border-3 shadow-2xl h-auto sm:h-[320px] md:h-[320px] w-[100%] sm:w-[95%] lg:w-[80%] mb-[40px] sm:mb-[100px] lg:mb-[100px]"
>
	<!-- Image  -->
	<div class="flex items-center justify-center h-full w-full sm:w-[50%] md:w-[45%]">
		<img alt="product" class="relative p-2 h-full" src={productImage} />
	</div>

	<!-- Content  -->
	<div class="flex flex-col items-start p-4 md:p-10 w-[90%] sm:w-[45%] md:w-[55%]">
		<p class="font-main text-5xl">{productName}</p>
		<!-- Properties  -->
		<div class="flex items-center mt-2">
			{#each properties as property}
				<p class="text-primary text-md md:text-lg">{property}</p>
				<div class="h-2 w-2 rounded-[50%] bg-gray mx-2 md:mx-3" />
			{/each}
		</div>
		<!-- Description  -->
		<div class="my-4">
			<p class="text-sm md:text-md lg:text-lg font-thin">
				{description}
			</p>
		</div>

		<Button {link} disabled={comingSoon} label="Buy" />

		<!-- {#if comingSoon}
			<div class="absolute top-5 right-5">
				<p class="text-primary font-medium">Coming Soon</p>
			</div>
		{/if} -->
	</div>
</div>
