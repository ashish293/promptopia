"use client";

import Form from "@components/Form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({ prompt: "", tag: "" });

	const createPost = async (e) => {
		e.preventDefault();
		console.log("createPost", post);
		setSubmitting(true);
		try {
			const response = await axios.post("/api/prompt/new", {
				...post,
				userId: session.user.id,
			});
			console.log("response", response);
			if (response.status === 201) {
				alert("Prompt created successfully");
				router.push("/");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
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
