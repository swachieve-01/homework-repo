import { useReducer, useState } from "react";

function todoReducer(state, action) {
	switch (action.type) {
		case "ADD": {
			const text = String(action.payload).trim();
			if (!text) return state;

			const newTodo = {
				id: Date.now(),
				text,
				done: false,
			};

			return [...state, newTodo];
		}

		case "TOGGLE": {
			const id = action.payload;
			return state.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
		}

		case "DELETE": {
			const id = action.payload;
			return state.filter((todo) => todo.id !== id);
		}

		default:
			return state;
	}
}

export default function App() {
	const [input, setInput] = useState("");

	const [todos, dispatch] = useReducer(todoReducer, []);

	const handleAdd = () => {
		dispatch({
			type: "ADD",
			payload: input,
		});
		setInput("");
	};

	return (
		<div style={{ padding: 24 }}>
			<h2>Todo-list</h2>

			<div style={{ display: "flex", gap: 8 }}>
				<input value={input} onChange={(e) => setInput(e.target.value)} placeholder="할 일 입력" />
				<button onClick={handleAdd}>추가</button>
			</div>

			<ul>
				{todos.map((todo) => (
					<li key={todo.id} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
						<span
							onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
							style={{
								cursor: "pointer",
								textDecoration: todo.done ? "line-through" : "none",
							}}
						>
							{todo.text}
						</span>

						<button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>삭제</button>
					</li>
				))}
			</ul>
		</div>
	);
}
