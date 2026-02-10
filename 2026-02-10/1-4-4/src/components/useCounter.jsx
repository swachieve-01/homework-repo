import { useState } from "react";

export default function useCounter(initialValue = 0, options = {}) {
	const { min, max } = options;

	const [count, setCount] = useState(initialValue);

	const increment = () => {
		setCount((prev) => {
			if (max !== undefined && prev >= max) return prev;
			return prev + 1;
		});
	};

	const decrement = () => {
		setCount((prev) => {
			if (min !== undefined && prev <= min) return prev;
			return prev - 1;
		});
	};

	const reset = () => {
		setCount(initialValue);
	};

	return { count, increment, decrement, reset };
}
