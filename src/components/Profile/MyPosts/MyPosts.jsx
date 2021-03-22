import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
				<div className={s.posts}>
					<Post message="Hi. How are you?" likeCounts="2" />
					<Post message="Good job!" likeCounts="21" />
				</div>
			</div>
		</div>
	);
};

export default MyPosts;
