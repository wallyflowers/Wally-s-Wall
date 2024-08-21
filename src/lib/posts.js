// Use import.meta.glob to get all .svx files in the posts directory
const postFiles = import.meta.glob('/src/lib/posts/*.md', { eager: true });

export const posts = Object.entries(postFiles).map(([filepath, post]) => {
	const filename = filepath.split('/').pop().replace('.svx', '');

	return {
		filename: filename,
		...post.metadata
	};
});

// Sort posts by date if you have a date field in your frontmatter
posts.sort((a, b) => new Date(b.date) - new Date(a.date));
