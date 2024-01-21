function numberOneTriangle() {
    const inputNumber = document.getElementById('inputNumber').value;
    const triangleOutput = document.getElementById('triangleOutput');
    if (inputNumber < 1 || inputNumber > 10) {
        alert('Vui lòng nhập số nguyên trong khoảng từ 1 đến 10.');
        return;
    }
    let triangle = '';
    for (let i = 1; i <= inputNumber; i++) {
        for (let j = 1; j <= i; j++) {
            triangle += '* ';
        }
        triangle += '<br>';
    }
    triangleOutput.innerHTML = triangle;
}
