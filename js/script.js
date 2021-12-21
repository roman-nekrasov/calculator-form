"use strict"

document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById("form");
	form.addEventListener("submit", calculate);

	function calculate() {

		let formData = new FormData(form);

		let param1 = formData.get("param-1");
		let param2 = formData.get("param-2");
		let operation = formData.get("operation");
		let result;

		switch(operation) {
			case "+ (додати)":
				if ( !(param1 === "") && !(param2 === "") && ( (+param1 + +param2) || (+param1 + +param2) === 0 ) ) {
					result = Math.round(+param1 + +param2);
					alert("Увага, MISTER-MATH завжди округлює результат до цілого числа! Результат обчислень: " + result);
				} else {
					alert("Неможливо провести обчислення, оскільки введено некоректні дані. Спробуй ще раз. Потрібно вводити лише числа, для позначення дробової частини використовуй крапку (.)");
				};
				break;
			case "- (відняти)":
				if ( !(param1 === "") && !(param2 === "") && ( (+param1 + +param2) || (+param1 - +param2) === 0 ) ) {
					result = Math.round(+param1 - +param2);
					alert("Увага, MISTER-MATH завжди округлює результат до цілого числа! Результат обчислень: " + result);
				} else {
					alert("Неможливо провести обчислення, оскільки введено некоректні дані. Спробуй ще раз. Потрібно вводити лише числа, для позначення дробової частини використовуй крапку (.)");
				};
				break;
			case "* (помножити)":
				if ( !(param1 === "") && !(param2 === "") && ( (+param1 + +param2) || (+param1 * +param2) === 0 ) ) {
					result = Math.round(+param1 * +param2);
					alert("Увага, MISTER-MATH завжди округлює результат до цілого числа! Результат обчислень: " + result);
				} else {
					alert("Неможливо провести обчислення, оскільки введено некоректні дані. Спробуй ще раз. Потрібно вводити лише числа, для позначення дробової частини використовуй крапку (.)");
				};
				break;
			case "/ (поділити)":
				if ( !(param1 === "") && !(param2 === "") && ( (+param1 + +param2) || (+param1 / +param2) === 0 ) ) {
					result = Math.round(+param1 / +param2);
					alert("Увага, MISTER-MATH завжди округлює результат до цілого числа! Результат обчислень: " + result);
				} else if (+param1===0 && +param2 ===0) {
					alert("Математична помилка. Ще нікому не вдавалось поділити нуль на нуль. Спробуй ще раз з іншими числами=)");
				} else {
					alert("Неможливо провести обчислення, оскільки введено некоректні дані. Спробуй ще раз. Потрібно вводити лише числа, для позначення дробової частини використовуй крапку (.)");
				};
				break;
		};
	};
});

/*

У калькуляторі є пасхалки! Ми все ще можемо отримати NaN =) Я вирішив не добавляти додаткових перевірок для окремих випадків, про існування яких можуть знати лише розробники чи ті, хто близько знайом з темою:

1. Infinity / Infinity повертає NaN
2. 0 / Infinity повертає NaN

Слово Infinity обов'язково має бути написано з великої літери.

0 / 0 також повертає NaN, але це я врахував, тому що звичайний користувач (в теорії) може ввести такі дані.

*/
