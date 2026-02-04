function Post({ author, content }) {
	return (
		<div style={{ border: "1px solid rgb(0, 0, 0)", padding: 12, marginBottom: 8 }}>
			<h4>{author}</h4>
			<p>{content}</p>
		</div>
	);
}

export default Post;
