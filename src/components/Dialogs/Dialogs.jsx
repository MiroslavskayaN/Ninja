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
	let dialogsData = [
		{ id: 1, name: "Stasy" },
		{ id: 2, name: "Andrew" },
		{ id: 3, name: "Alex" },
		{ id: 4, name: "Ally" },
		{ id: 5, name: "Arthur" },
	];

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialodItem
					name={dialogsData[0].name}
					id={dialogsData[0].name}
				/>
				<DialodItem
					name={dialogsData[1].name}
					id={dialogsData[1].name}
				/>
				<DialodItem name={dialogsData[2].name} id="3" />
				<DialodItem name={dialogsData[3].name} id="4" />
				<DialodItem name={dialogsData[4].name} id="5" />
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
