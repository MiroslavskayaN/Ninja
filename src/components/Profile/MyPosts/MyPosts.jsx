import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={s.content}>
			<div>
				My posts
				<div>New post</div>
				<div className={s.posts}>
					<Post message="Hi. How are you?" likeCounts="2" />
					<Post message="Good job!" likeCounts="21" />
				</div>
			</div>
		</div>
	);
};

export default MyPosts;
