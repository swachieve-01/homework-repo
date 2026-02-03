import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
	const name = "박상우";
	const birthYear = 2000;
	const hobbies = ["게임", "음악", "볼링"];
	const mbti = "ISTP";

	const age = new Date().getFullYear() - birthYear;

	return (
		<>
			<div className="profile-card">
				<Header />
				<Card label="이름" value={name} />
				<Card label="나이" value={`${age}세`} />
				<Card label="취미" value={hobbies.join(", ")} />
				<Card label="MBTI" value={mbti} />
			</div>
			<Footer />
		</>
	);
}

export default App;
