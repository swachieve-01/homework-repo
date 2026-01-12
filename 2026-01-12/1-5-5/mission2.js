function orderPizza(menu) {
	console.log(menu + " 주문 접수 중...");

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() < 0.3) {
				reject(new Error("재료 소진"));
			} else {
				resolve(menu + " 준비 완료!");
			}
		}, 1000);
	});
}

async function kiosk() {
	console.log("=== 키오스크 가동 ===");

	try {
		const result = await orderPizza("페퍼로니");
		console.log(result);
	} catch (error) {
		console.log("죄송합니다. 재료가 소진되었습니다.");
	} finally {
		console.log("이용해 주셔서 감사합니다.");
	}
}

kiosk();
