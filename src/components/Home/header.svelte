<script>
	import { Button, Popover } from '$components';
	const RueIcon = '/icons/rue.svg';
	const ProductImg1 = '/images/header1.png';
	const ProductImg2 = '/images/header2.png';
</script>

<section
	id="home"
	class="relative flex items-center justify-center h-[60vh] sm:h-[calc(100vh-100px)] w-full"
>
	<img
		alt="rue"
		class="absolute h-[50vh] sm:h-[60vh] left-[50] top-[40px] sm:left-0 sm:top-[0px] md:top-[-50px] md:left-10"
		src={RueIcon}
	/>

	<!-- <Popover /> -->
	<div
		class="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full md:w-[90%] h-full"
	>
		<!-- Logo and Description  -->
		<div class="flex justify-center h-full w-full sm:w-[48%]">
			<div class="flex flex-col items-center justify-center h-full w-full">
				<div class="flex flex-col items-end justify-start">
					<div class="flex items-baseline">
						<p class="font-heading text-primary text-8xl md:text-9xl">a</p>
						<p class="font-heading text-3xl md:text-4xl">bu</p>
					</div>
					<p class="font-heading text-3xl md:text-4xl">naturals</p>
				</div>

				<div class="flex flex-col items-center mt-5 w-[90%] sm:w-[80%]">
					<p class="font-main text-4xl opacity-50">derived from nature</p>
					<hr class="w-1/3 mt-4 opacity-25" />
					<div class="flex flex-col items-center md:items-start w-full">
						<p
							class="text-center md:text-left font-main leading-8 md:leading-none text-3xl md:text-4xl my-8 md:my-10"
						>
							Our essential oils are sustainably sourced from nature's finest ingredients, crafted
							simply using cold pressure to retain 100% purity and potency.
						</p>

						<Button label="Shop Products" link="#products" target="_self" />
					</div>
				</div>
			</div>
		</div>

		<!-- Images  -->
		<div
			class="hidden sm:flex relative items-center sm:justify-end md:justify-end lg:justify-end h-full w-full sm:w-[48%] overflow-hidden"
		>
			<img
				alt="product"
				class="absolute w-auto h-[350px] z-10 sm:-left-[30px] md:left-[5px] lg:left-[20px] xl:left-[40px]"
				src={ProductImg1}
			/>
			<img
				alt="product"
				class="absolute w-auto h-[500px] sm:left-[80px] md:left-[140px] lg:left-[180px] xl:left-[200px]"
				src={ProductImg2}
			/>
		</div>
	</div>
</section>
