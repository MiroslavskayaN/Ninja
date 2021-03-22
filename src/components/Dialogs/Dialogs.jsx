import s from "./Dialogs.module.css";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog}>Stasy </div>
				<div className={s.dialog}>Andrew</div>
				<div className={s.dialog}>Alex</div>
				<div className={s.dialog}>Ally</div>
				<div className={s.dialog}>Arthur</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi. What`s upp?</div>
				<div className={s.message}>Cool</div>
				<div className={s.message}>ok</div>
			</div>
		</div>
	);
};

export default Dialogs;
