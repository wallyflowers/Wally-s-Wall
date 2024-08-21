export const load = async ({ params }) => {
	const posts = import.meta.glob('../../lib/posts/*.md');

	if (posts[`../../lib/posts/${params.post}`]) {
		const post = await posts[`../../lib/posts/${params.post}`]();
		return {
			PostContent: post.default,
			metadata: post.metadata,
			slug: post.filename
		};
	}

	// Handle case when post is not found
	return {
		status: 404,
		error: new Error(`Post not found: ${params.post}`)
	};
};
