import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div>
			<div className="">
				<img
					alt="social"
					src="http://themelooks.us/demo/socifly/html/img/preview-img/banner-bg.jpg"
				/>
			</div>
			<div>ava + descr</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
