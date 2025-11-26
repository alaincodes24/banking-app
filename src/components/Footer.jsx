const Footer = () => {
	return (
		<footer className="bg-[#F0F3FE]">
			<div className="text-[#7190F0] grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 w-3/4 mx-auto py-14">
				<div>
					<h2>Let's create something great</h2>
				</div>
				<div className="place-self-end">
					<div className="place-self-end">
						<h3>Contact</h3>
					</div>
					<a href="mailto:matt@gmail.com">matt@gmail.com</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
