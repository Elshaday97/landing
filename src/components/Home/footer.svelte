<script>
	import { navLinks, socials } from '$components/utils';

	const LogoIcon = '/icons/logo.svg';
	const PhoneIcon = '/icons/phone.svg';
	const MailIcon = '/icons/mail.svg';
</script>

<section
	id="contact"
	class="flex items-center justify-center relative bg-[rgba(226,223,218,0.25)] h-[230px] sm:h-[90px] w-full mt-10 md:mt-16 lg:mt-5"
>
	<div
		class="flex flex-col sm:flex-row items-center justify-between mb-4 w-[90%] sm:w-[95%] md:w-[90%]"
	>
		<a class="mb-3 sm:mb-0" href="/">
			<img alt="Logo" class="h-14" src={LogoIcon} />
		</a>

		<div class="flex flex-wrap items-center justify-center mb-2 sm:mb-0">
			<img alt="Phone" class="h-6" src={PhoneIcon} />
			<a class="ml-2" href="tel:251930128212">(+251) 930-128212 /</a>
			<a class="ml-2" href="tel:+251910140692"> (+251) 910-140692 </a>
		</div>

		<div class="flex items-center mb-3 sm:mb-0">
			<img alt="Phone" class="h-6" src={MailIcon} />
			<a class="ml-2" href="mailto:abunaturals@gmail.com">abunaturals@gmail.com</a>
		</div>

		<ul class="flex item-center ml-3">
			{#each socials as social}
				<li>
					<a href={social.href} target="_blank" rel="noopener noreferrer">
						<img alt="social" class="h-5 w-5 ml-4" src={social.icon} /></a
					>
				</li>
			{/each}
		</ul>
	</div>
	<div class="absolute bottom-0 w-full bg-primary h-3" />
</section>
