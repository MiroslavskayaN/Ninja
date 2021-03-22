import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Message = (props) => {
	return <div className={s.message}>{props.text}</div>;
};

const DialodItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<div className={s.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialodItem name="Stasy" id="1" />
				<DialodItem name="Andrew" id="2" />
				<DialodItem name="Alex" id="3" />
				<DialodItem name="Ally" id="4" />
				<DialodItem name="Arthur" id="5" />
			</div>
			<div className={s.messages}>
				<Message text="Hi. What`s upp?" />
				<Message text="Cool" />
				<Message text="ok" />
			</div>
		</div>
	);
};

export default Dialogs;
