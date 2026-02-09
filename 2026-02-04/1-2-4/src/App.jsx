import { useMemo, useState } from "react";

export default function App() {
	// Theme
	const [isDark, setIsDark] = useState(false);

	// Profile
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState("박상우");
	const [status, setStatus] = useState("오늘도 화이팅!");

	const themeStyle = useMemo(
		() => ({
			minHeight: "100vh",
			width: "100vw",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: isDark ? "#111" : "#f5f5f5",
			color: isDark ? "#fff" : "#111",
			padding: 24,
		}),
		[isDark]
	);

	const buttonStyle = (primary = false) => ({
		padding: "10px 12px",
		borderRadius: 10,
		border: "none",
		cursor: "pointer",
		flex: 1,
		backgroundColor: primary ? (isDark ? "#4f46e5" : "#6366f1") : isDark ? "#333" : "#e5e7eb",
		color: isDark ? "#fff" : "#111",
	});

	const cardStyle = useMemo(
		() => ({
			width: 420,
			borderRadius: 16,
			padding: 20,
			backgroundColor: isDark ? "#1b1b1b" : "#fff",
			border: `1px solid ${isDark ? "#333" : "#e5e5e5"}`,
			boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
		}),
		[isDark]
	);

	const warning = status.length > 20;

	const onToggleEdit = () => {
		setIsEditing((prev) => !prev);
	};

	return (
		<div style={themeStyle}>
			<div style={cardStyle}>
				<div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
					<h2 style={{ margin: 0 }}>Theme & Profile Manager</h2>

					<button
						onClick={() => setIsDark((prev) => !prev)}
						style={{
							padding: "10px 12px",
							borderRadius: 10,
							border: `1px solid ${isDark ? "#444" : "#ddd"}`,
							cursor: "pointer",
							backgroundColor: isDark ? "#222" : "#fff",
							color: isDark ? "#fff" : "#111",
						}}
					>
						{isDark ? "라이트 모드" : "다크 모드"}
					</button>
				</div>

				<hr style={{ margin: "16px 0", borderColor: isDark ? "#333" : "#eee" }} />

				{}
				{!isEditing ? (
					<div>
						<p style={{ margin: "0 0 8px" }}>
							<b>이름:</b> {name}
						</p>
						<p style={{ margin: 0 }}>
							<b>상태:</b> {status}
						</p>
					</div>
				) : (
					<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
						<label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
							<span>이름</span>
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								style={{
									padding: 10,
									borderRadius: 10,
									border: `1px solid ${isDark ? "#444" : "#ddd"}`,
									background: isDark ? "#121212" : "#fff",
									color: isDark ? "#fff" : "#111",
								}}
							/>
						</label>

						<label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
							<span>상태 메시지</span>
							<input
								value={status}
								onChange={(e) => setStatus(e.target.value)}
								style={{
									padding: 10,
									borderRadius: 10,
									border: `1px solid ${warning ? "red" : isDark ? "#444" : "#ddd"}`,
									background: isDark ? "#121212" : "#fff",
									color: isDark ? "#fff" : "#111",
								}}
							/>
							<div style={{ fontSize: 12, marginTop: 4 }}>
								글자 수: <b>{status.length}</b>/20 {warning && <span style={{ color: "red" }}>⚠ 20자 초과!</span>}
							</div>
						</label>
					</div>
				)}

				<div style={{ marginTop: 16, display: "flex", gap: 10 }}>
					<button onClick={onToggleEdit} style={buttonStyle(true)}>
						{isEditing ? "저장" : "편집"}
					</button>
					{isEditing && (
						<button onClick={() => setIsEditing(false)} style={buttonStyle(false)}>
							취소
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
