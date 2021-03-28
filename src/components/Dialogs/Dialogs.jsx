import DialodItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map((dialog) => (
		<DialodItem name={dialog.name} id={dialog.id} />
	));

	let messagesElements = props.state.messages.map((message) => (
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
