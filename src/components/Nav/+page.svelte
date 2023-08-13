<script>
	const LogoIcon = '/icons/logo.svg';
	const InstagramIcon = '/icons/instagram.svg';
	const TwitterIcon = '/icons/twitter.svg';
	const FacebookIcon = '/icons/facebook.svg';
	const MenuIcon = '/icons/menu.svg';
	const xIcon = '/icons/x.svg';

	const socials = [
		{
			icon: FacebookIcon,
			href: ''
		},
		{
			icon: InstagramIcon,
			href: ''
		},
		{
			icon: TwitterIcon,
			href: ''
		}
	];
	const navLinks = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Products',
			href: '#products'
		},
		{
			label: 'About Us',
			href: '/about'
		},
		{
			label: 'Contact',
			href: '/contact'
		}
	];
</script>

<section
	class="border border-primary border-b-1 border-t-0 border-l-0 border-r-0 flex items-center justify-between py-5 mb-5 h-20 w-full"
>
	<a class="pl-4 md:pl-16 lg:pl-20" href="/">
		<img alt="Logo" class="h-12" src={LogoIcon} />
	</a>

	<!-- Desktop Nav  -->
	<div
		class="hidden sm:flex flex-col items-end divide-y divide-slate-200 sm:w-3/5 md:w-3/5 lg:w-6/12"
	>
		<ul class="flex item-center pr-4 md:pr-16 lg:pr-20 pb-2">
			{#each socials as social}
				<li>
					<a href={social.href}> <img alt="social" class="h-4 w-4 ml-4" src={social.icon} /></a>
				</li>
			{/each}
		</ul>

		<ul class="flex items-center justify-end pr-4 md:pr-16 lg:pr-20 py-2 w-full">
			{#each navLinks as navLink}
				<li>
					<a href={navLink.href} class="sm:text-xs text-md ml-9 uppercase font-heading"
						>{navLink.label}</a
					>
				</li>
			{/each}
		</ul>
	</div>
	<!-- Mobile Nav  -->
	<img alt="menu" class="sm:hidden pr-4" src={MenuIcon} />
</section>
