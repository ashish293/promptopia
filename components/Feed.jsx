"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
	console.log(data);
	return (
		<div className="mt-16 prompt_layout">
			{data.map((post) => (
				<PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
			))}
		</div>
	);
};

const Feed = () => {
	const [search, setSearch] = useState();
	const [posts, setPosts] = useState([]);
	const handleChangeSearch = (e) => {
		setSearch(e.target.value);
	};

	const getPosts = async () => {
		const res = await axios.get("/api/posts");
		setPosts(res.data);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<section className="feed">
			<form className="relative w-full flex-center">
				<input
					type="text"
					value={search}
					onChange={handleChangeSearch}
					placeholder="search"
					required
					className="search_input peer"
				/>
			</form>

			<PromptCardList data={posts} handleTagClick={() => {}} />
		</section>
	);
};

export default Feed;
