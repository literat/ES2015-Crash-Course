function defaultDiscountRate() {
    return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()) { // 100, .10
    return cost - (cost * discount);
}

alert(applyDiscount(100));