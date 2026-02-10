import useCounter from "./components/useCounter";

export default function App() {
	const { count, increment, decrement, reset } = useCounter(0, {
		min: 0,
		max: 10,
	});

	return (
		<div style={styles.container}>
			<h2 style={styles.title}>useCounter</h2>
			<p style={styles.count}>{count}</p>

			<div style={styles.buttons}>
				<button style={styles.btn} onClick={decrement}>
					-
				</button>
				<button style={styles.btn} onClick={increment}>
					+
				</button>
				<button style={styles.reset} onClick={reset}>
					reset
				</button>
			</div>
		</div>
	);
}

const styles = {
	container: {
		width: 260,
		margin: "80px auto",
		padding: 24,
		borderRadius: 12,
		textAlign: "center",
		background: "#8400ff",
		color: "#ffffff",
	},
	title: {
		marginBottom: 12,
	},
	count: {
		fontSize: 40,
		fontWeight: "bold",
		marginBottom: 20,
	},
	buttons: {
		display: "flex",
		justifyContent: "center",
		gap: 8,
	},
	btn: {
		padding: "8px 14px",
		borderRadius: 8,
		background: "#ffffff",
		border: "none",
		cursor: "pointer",
	},
	reset: {
		padding: "8px 14px",
		borderRadius: 8,
		border: "none",
		cursor: "pointer",
		background: "#ef4444",
		color: "#fff",
	},
};
