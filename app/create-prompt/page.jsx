"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useState } from "react";

const page = () => {
	const { data: session, status } = useSession();
	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({ prompt: "", tag: "" });

	const createPost = async (e) => {
		// e.preventDefault();
	};
	return (
		<Form
			type="Create"
			post={post}
			setPost={setPost}
			submitting={submitting}
			handleSubmit={createPost}
		/>
	);
};

export default page;
