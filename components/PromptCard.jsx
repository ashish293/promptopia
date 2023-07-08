import Image from "next/image";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
	return (
		<div className="prompt_card">
			<div className="flex justify-between items-start gap-5">
				<div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
					<Image
						src={post?.creator?.image}
						alt="user_image"
						height={40}
						width={40}
						className="rounded-full object-contain"
					/>
					<div className="flex flex-col">
						<h3>{post?.creator?.username}</h3>
						<p>{post?.creator?.email}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PromptCard;
