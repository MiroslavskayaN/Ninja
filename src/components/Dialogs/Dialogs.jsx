import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog}>
					<NavLink to="/dialogs/1">Stasy</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/2">Andrew</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/3">Alex</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/4">Ally</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/5">Arthur</NavLink>
				</div>
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
