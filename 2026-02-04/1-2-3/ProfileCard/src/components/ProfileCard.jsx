function ProfileCard({ name, age, job }) {
	return (
		<div style={{ border: "1px solid #000", padding: 12, marginBottom: 16 }}>
			<h2>프로필 카드</h2>
			<p>이름: {name}</p>
			<p>나이: {age}</p>
			<p>직업: {job}</p>
		</div>
	);
}

export default ProfileCard;
