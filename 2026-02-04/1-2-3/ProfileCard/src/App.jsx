import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Post from "./components/Post";

function App() {
	return (
		<div className="app">
			<div className="container">
				<ProfileCard name="박상우" age={26} job="Student" />

				<Post author="상우" content="React 쉽지 않군!" />
				<Post author="상우" content="돈 벌고 싶으면 해야지" />
			</div>
		</div>
	);
}

export default App;
