import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postsElements = props.posts.map((post) => (
		<Post message={post.message} likeCounts={post.likeCount} />
	));

	return (
		<div className={s.postsBlock}>
			<div>
				<h3>My posts</h3>
				<div>
					<div>
						<textarea></textarea>
					</div>
					<div>
						<button>Add post</button>
					</div>
				</div>
				<div className={s.posts}>{postsElements}</div>
			</div>
		</div>
	);
};

export default MyPosts;
