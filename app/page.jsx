import Feed from "@components/Feed";

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Discover and Share
				<br className="max-md:hidden" />
				{/* <br /> */}
				<span className="orange_gradient text-center"> AI Powered Prompts</span>
			</h1>
			<p className="desc text-center">
				Welcome to Promptopia, the revolutionary AI-powered prompt tool designed to ignite your
				creativity and guide your writing journey. Whether you're an aspiring writer, a seasoned
				author, or simply someone who enjoys writing as a hobby, Promptopia is here to inspire and
				support you every step of the way.
			</p>
			<Feed />
		</section>
	);
};

export default Home;
