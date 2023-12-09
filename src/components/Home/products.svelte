<script>
	import { Card } from '$components';
	const BlackSeedImg = '/images/product.png';
	const CastorImg = '/images/castor.png';
</script>

<section
	id="products"
	class="product flex flex-col items-center justify-center min-h-[100vh] w-[100vw] relative mt-10 md:mt-16 lg:mt-10 p-10"
>
	<p class="font-main text-4xl text-primary">shopping</p>
	<p class="font-heading text-2xl sm:text-3xl uppercase mb-16">Our Products</p>

	<Card
		description="Naturally sourced, filtered, and cold-pressed Black Seed Oil. Embrace the benefits of this exceptional oil for your well-being."
		comingSoon={false}
		link="https://t.me/abunaturals"
		productImage={BlackSeedImg}
		productName="Black Seed Oil"
		properties={['100% pure', 'cold pressed']}
	/>

	<Card
		comingSoon
		description="Naturally sourced, roasted, and cold-pressed Black Castor Oil. Experience its nourishing benefits by incorporating it in your self-care routine."
		productImage={CastorImg}
		productName="Black Castor Oil"
		properties={['100% pure', 'cold pressed']}
	/>
</section>
