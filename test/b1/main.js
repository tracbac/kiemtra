function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculatePrimes() {
    const inputA = parseInt(document.getElementById('inputA').value);
    const inputB = parseInt(document.getElementById('inputB').value);

    if (isNaN(inputA) || isNaN(inputB) || inputA >= inputB) {
        alert('Vui lòng nhập số hợp lệ (a < b).');
        return;
    }

    let sumPrimes = 0;

    for (let i = inputA; i <= inputB; i++) {
        if (isPrime(i)) {
            sumPrimes += i;
        }
    }

    document.getElementById('result').innerHTML = `Tổng số nguyên tố trong khoảng từ ${inputA} đến ${inputB} là: ${sumPrimes}`;
}
