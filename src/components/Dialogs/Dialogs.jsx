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
	let dialogs = [
		{ id: 1, name: "Stasy" },
		{ id: 2, name: "Andrew" },
		{ id: 3, name: "Alex" },
		{ id: 4, name: "Ally" },
		{ id: 5, name: "Arthur" },
	];

	let messages = [
		{ id: 1, message: "Hi. What`s upp?" },
		{ id: 2, message: "Cool" },
		{ id: 3, message: "ok" },
		{ id: 4, message: "Hi" },
		{ id: 5, message: "Yo" },
	];

	let dialogsElements = dialogs.map((dialog) => (
		<DialodItem name={dialog.name} id={dialog.id} />
	));

	let messagesElements = messages.map((message) => (
		<Message text={message.message} />
	));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>{messagesElements}</div>
		</div>
	);
};

export default Dialogs;
