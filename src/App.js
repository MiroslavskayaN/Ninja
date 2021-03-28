import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

const App = () => {
	return (
		<BrowserRouter>
			<div className="b-wrapper">
				<Header />
				<Nav />
				<div className="b-wrapper-content">
					<Route path="/dialogs" render={() => <Dialogs />} />
					<Route path="/profile" render={() => <Profile />} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
