const BlogCard = ({ title, description, bgImage, date }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
			<div>
				<h3 className="text-2xl uppercase text-center md:text-left">{title}</h3>
				<p className="mt-4">{description}</p>
				<p className="mt-4">{date}</p>
				<div className="mt-4">
					<button className="border-b-2 border-[#7190F0] text-[#7190F0]">Read More</button>
				</div>
			</div>
			<div>
				<img src={bgImage} className="h-auto" alt="blog image" />
			</div>
		</div>
	);
};

export default BlogCard;
