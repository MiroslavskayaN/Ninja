import s from "./Header.module.css";

const Header = () => {
	return (
		<header className={s.header}>
			<img
				src="http://themelooks.us/demo/socifly/html/img/logo-black.png"
				alt="logo"
			></img>
		</header>
	);
};

export default Header;
