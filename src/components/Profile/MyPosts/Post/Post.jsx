import s from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={s.item}>
			<img
				alt="avatar"
				src="https://it-workings.ru/wp-content/uploads/2019/08/blank-avatar.jpg"
			/>
			{props.message}
			<div>
				<span>{props.likeCounts} likes</span>
			</div>
		</div>
	);
};

export default Post;
