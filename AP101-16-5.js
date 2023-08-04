function calculateBill(load,time) {
    const kwLoad = load / 1000;
    const consumption = kwLoad * time;
    const bill = consumption * 100;

    return `Your bill for ${time} hours is ₦${bill}`
}

console.log(calculateBill(200,2));