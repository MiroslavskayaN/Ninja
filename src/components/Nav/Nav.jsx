import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = (props) => {
	let friendsPanel = props.state.friends.map((friend) => (
		<>
			<img
				className={s.avatar}
				alt="avatar"
				src="https://it-workings.ru/wp-content/uploads/2019/08/blank-avatar.jpg"
			/>
			<div>{friend.name}</div>
		</>
	));
	return (
		<nav className={s.navigation}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.active}>
					Profile
				</NavLink>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to="/dialogs" activeClassName={s.active}>
					Messages
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" activeClassName={s.active}>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music" activeClassName={s.active}>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/settings" activeClassName={s.active}>
					Settings
				</NavLink>
			</div>
			<div className={s.item}>
				Friends
				{friendsPanel}
			</div>
		</nav>
	);
};

export default Nav;
