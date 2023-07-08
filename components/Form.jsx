import Link from "next/link";

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

			<form
				onSubmit={handleSubmit}
				className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphish"
			>
				<label>
					<span className="font-santoshi font-semibold text-base text-gray-700">
						Your AI Prompt
					</span>
					<textarea
						name=""
						id=""
						value={post.prompt}
						onChange={(e) => {
							setPost({ ...post, prompt: e.target.value });
						}}
						required
						placeholder="Enter your prompt here"
						className="form_textarea"
					/>
				</label>
				<label>
					<span className="font-santoshi font-semibold text-base text-gray-700">
						Tag <span>(#product, #webdevelopment)</span>
					</span>
					<input
						type="text"
						value={post.tag}
						onChange={(e) => {
							setPost({ ...post, tag: e.target.value });
						}}
						placeholder="#tag"
						className="form_input"
						required
					/>
				</label>
				<div className="my-3 flex-end">
					<Link
						href="/"
						className="text-sm text-white bg-orange-500 p-3 rounded-md mr-4 uppercase w-24 flex-center"
					>
						Cancel
					</Link>
					<button
						disabled={submitting}
						type="submit"
						className="bg-blue-500 disabled:bg-blue-200 p-3 text-sm text-white rounded-md uppercase flex-center w-24"
					>
						{submitting ? `${type}...` : type}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
