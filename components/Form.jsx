const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
	return (
		<section className="w-full max-w-full flex-start flex-col">
			<h1 className="head_text text-left blue_gradient">{type} Post</h1>
			<p className="mt-2 w-100 sm:w-2/3">
				Discover promptopia, the platform where you can easily create and share prompts. Craft
				personalized prompts, share with friends, and engage in prompt-based competitions. Unleash
				your creativity, connect with a vibrant community, and embark on an inspiring artistic
				journey. Start creating and sharing prompts today for endless creative possibilities.
			</p>
		</section>
	);
};

export default Form;
