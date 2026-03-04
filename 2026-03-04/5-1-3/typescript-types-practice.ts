let studentName: string = "박상우";
let age: number = 26;
let isGraduated: boolean = true;
let subjects: string[] = ["운동", "영화", "게임"];

type Point3D = [number, number, number];

type Role = "admin" | "manager" | "user";

type SubjectScores = Record<string, number>;

type BasicUser = {
	name: string;
	age: number;
};

type Contact = {
	email: string;
	phone: string;
};

type EmployeeProfile = BasicUser & Contact;

const evaluateEmployee = (employee: EmployeeProfile): "해고됨" | "승진함" => {
	if (employee.age > 30) {
		return "승진함";
	}
	return "해고됨";
};
