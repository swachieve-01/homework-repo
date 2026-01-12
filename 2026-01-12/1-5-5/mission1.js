function orderPizza(menu) {
	console.log(menu + " 주문 접수 중...");

	if (Math.random() < 0.3) {
		throw new Error("재료 소진");
	}

	return menu + " 준비 완료!";
}

function kiosk() {
	console.log("=== 키오스크 가동 ===");

	try {
		const result = orderPizza("페퍼로니");
		console.log(result);
	} catch (error) {
		console.log("죄송합니다. 재료가 소진되었습니다.");
	}
}

kiosk();
