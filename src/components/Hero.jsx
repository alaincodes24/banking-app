import HeroImage from "../assets/matt.jpg";
import Button from "./Button";
import Arrow from "../assets/arrrow.png";

const Hero = () => {
	return (
		<section className="w-3/4 mx-auto my-20">
			<div className="grid grid-cols-2">
				<div className="flex flex-col justify-center gap-y-4">
					<h1 className="font-bold text-6xl">I'm Matt</h1>
					<h3 className="text-xl text-[#7190F0]">
						Freelance Designer & Developer
					</h3>
					<div>
						<Button text="Hire Me Now" icon={Arrow} />
					</div>
				</div>
				<div className="rounded-[100px] w-[449px] h-[583px] overflow-hidden">
					<img src={HeroImage} alt="hero image" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
