const Card = ({ label, value }) => {
	return (
		<p className="profile-row">
			<span className="label">{label}</span>
			<span className="value">{value}</span>
		</p>
	);
};

export default Card;
