
function updateProductNumber(product, price, isIncrease){
    const productInput = document.getElementById(product);
    let productNumber = productInput.value;
    if(isIncrease == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    if(product == 'phone-number'){
        const phoneTotal = document.getElementById('phone-total');
        const phoneTotalMultiply = productNumber * price;
        phoneTotal.innerText = phoneTotalMultiply;
    }
    else{
        const caseTotal = document.getElementById('case-total');
        const caseTotalMultiply = productNumber * price;
        caseTotal.innerText = caseTotalMultiply;
    }
    // calculate total
    calculateTotal();
}

function calculateTotal(){
    const phoneInput = document.getElementById('phone-total');
    const phoneTotal = parseInt(phoneInput.innerText);

    const caseInput = document.getElementById('case-total');
    const caseTotal = parseInt(caseInput.innerText);


    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10; // 10% tax
    const totalPrice = subTotal + tax;
    // update on the sub total
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease by click on button
document.getElementById('phone-plus').addEventListener('click', function(){

    updateProductNumber('phone-number', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){

    updateProductNumber('phone-number', 1219, false);
});

// case increase decrease by click on button
document.getElementById('case-plus').addEventListener('click', function(){

    updateProductNumber('case-number', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){

    updateProductNumber('case-number', 59, false);
});