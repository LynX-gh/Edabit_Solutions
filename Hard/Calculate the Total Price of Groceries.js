function getTotalPrice(groceries) {
	return Math.round(groceries.reduce((res, elem) => res += elem.price*elem.quantity, 0) * 100)/100;
}