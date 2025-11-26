import Blog1 from "../assets/blog-1.jpg";
import Blog2 from "../assets/blog-2.jpg";
import Blog3 from "../assets/blog-3.jpg";
import BlogCard from "../components/BlogCard";

const Blog = () => {
	const blogs = [
		{
			id: 1,
			title: "Clients, Creativity, and Coffee",
			description:
				"What’s it really like working as a full-time freelance designer? I’ll give you an honest peek into my daily routine — including client calls, creative blocks, quick wins, and how I stay inspired (spoiler: coffee helps). If you’re thinking of going solo, t.",
			date: "Sep 15, 2024",
			bgImage: Blog1,
		},
		{
			id: 2,
			title: "The Art of Branding",
			description:
				"A logo isn’t a brand, but it’s often where brand perception starts. In this post, I discuss how I approach brand identity projects — from moodboards to typography — and why consistency across all touchpoints is key to building memorable, trustworthy brand...",
			date: "Sep 15, 2024",
			bgImage: Blog2,
		},
		{
			id: 3,
			title: "From Sketch to Screen",
			description:
				"Every designer has their own process. In this post, I walk you through my typical web design workflow — from initial discovery call and wireframes to development handoff. Whether you're a fellow designer or a curious client, this behind-the-scenes look re...",
			date: "Sep 15, 2024",
			bgImage: Blog3,
		},
	];

	return (
		<div>
			<div className="py-14">
				<h2 className="text-5xl text-center">My Blog</h2>
			</div>
			<section className="w-3/4 mx-auto py-7 flex flex-col gap-y-4">
				{blogs.map((blog) => (
					<BlogCard
						title={blog.title}
						description={blog.description}
						bgImage={blog.bgImage}
						date={blog.date}
					/>
				))}
			</section>
		</div>
	);
};

export default Blog;
