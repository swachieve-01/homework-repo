import { useEffect, useRef, useState } from "react";

export default function App() {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const timerRef = useRef(null);

	const handleStart = () => {
		if (timerRef.current) return;

		setIsRunning(true);
		timerRef.current = setInterval(() => {
			setTime((prev) => prev + 1);
		}, 10);
	};

	const handleStop = () => {
		if (!timerRef.current) return;

		clearInterval(timerRef.current);
		timerRef.current = null;
		setIsRunning(false);
	};

	const handleReset = () => {
		handleStop();
		setTime(0);
	};

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, []);

	const formatTime = () => {
		const ms = time % 100;
		const totalSec = Math.floor(time / 100);
		const sec = totalSec % 60;
		const min = Math.floor(totalSec / 60);

		const pad = (n) => String(n).padStart(2, "0");
		return `${pad(min)}:${pad(sec)}:${pad(ms)}`;
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "#0b1220",
				color: "#fff",
				padding: 24,
			}}
		>
			<div
				style={{
					width: 420,
					borderRadius: 18,
					padding: 28,
					background: "#0f1a2b",
					border: "1px solid rgba(255,255,255,0.08)",
					boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
					textAlign: "center",
				}}
			>
				<div style={{ fontSize: 64, fontWeight: 800, letterSpacing: 2 }}>{formatTime()}</div>

				<div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 18 }}>
					<button
						onClick={handleStart}
						disabled={isRunning}
						style={{
							padding: "12px 28px",
							borderRadius: 999,
							border: "none",
							cursor: isRunning ? "not-allowed" : "pointer",
							background: "#1d4ed8",
							color: "#fff",
							opacity: isRunning ? 0.5 : 1,
						}}
					>
						Start
					</button>

					<button
						onClick={handleStop}
						disabled={!isRunning}
						style={{
							padding: "12px 28px",
							borderRadius: 999,
							border: "none",
							cursor: !isRunning ? "not-allowed" : "pointer",
							background: "#7f1d1d",
							color: "#fff",
							opacity: !isRunning ? 0.5 : 1,
						}}
					>
						Stop
					</button>
				</div>

				<button
					onClick={handleReset}
					style={{
						marginTop: 18,
						background: "transparent",
						border: "none",
						color: "rgba(255,255,255,0.6)",
						cursor: "pointer",
						textDecoration: "underline",
					}}
				>
					Reset Timer
				</button>
			</div>
		</div>
	);
}
