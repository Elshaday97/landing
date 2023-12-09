<script>
	import { navLinks, socials } from '$components/utils';

	const LogoIcon = '/icons/logo.svg';
</script>

<section
	class="border border-primary border-b-1 border-t-0 border-l-0 border-r-0 flex items-center justify-between py-5 mb-5 h-20 w-full"
>
	<a class="pl-4 md:pl-16 lg:pl-20" href="/">
		<img alt="Logo" class="h-14" src={LogoIcon} />
	</a>

	<!-- Desktop Nav  -->
	<div class="flex flex-col items-end divide-y divide-slate-200 sm:w-3/5 md:w-3/5 lg:w-6/12">
		<ul class="flex item-center pr-4 md:pr-16 lg:pr-20 pb-2">
			{#each socials as social}
				<li>
					<a href={social.href} target="_blank" rel="noopener noreferrer">
						<img alt="social" class="h-4 w-4 ml-4" src={social.icon} /></a
					>
				</li>
			{/each}
		</ul>

		<ul class="hidden sm:flex items-center justify-end pr-4 md:pr-16 lg:pr-20 py-2 w-full">
			{#each navLinks as navLink}
				<li>
					<a
						href={navLink.href}
						class="sm:text-xs text-md font-medium ml-9 uppercase hover:text-primary"
						>{navLink.label}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</section>
