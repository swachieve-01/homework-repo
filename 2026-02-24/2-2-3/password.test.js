const isValidPassword = require("./password");

describe("isValidPassword", () => {
	test("유효한 비밀번호", () => {
		expect(isValidPassword("Password123")).toBe(true);
	});

	test("8자 미만은 실패", () => {
		expect(isValidPassword("Pass1")).toBe(false);
	});

	test("숫자 없음 → false", () => {
		expect(isValidPassword("password")).toBe(false);
	});

	test("영문 없음 → false", () => {
		expect(isValidPassword("12345678")).toBe(false);
	});

	test("빈 문자열 → false", () => {
		expect(isValidPassword("")).toBe(false);
	});
});
