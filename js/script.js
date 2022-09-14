const userSurname = document.querySelector('input[name="surname"]');
const userName =  document.querySelector('input[name="name"]');

const goodsElements = document.querySelectorAll('input[class="checkbox"]');
const countElements =  document.querySelectorAll('input[type="number"]');

const btn = document.querySelector('.btn');
const resultElem = document.querySelector('.sum');


let sum = 0;


const countGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}


const chosenPriceGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

function finalPrice(){
    sum = 0;
    for(var product in countGoods){        
        if(countGoods[product]!=0){
            sum += countGoods[product] * chosenPriceGoods[product];
        }
    }
    resultElem.textContent = sum + " р.";
}

countElements.forEach(elem => { 
    elem.addEventListener("change",function(){
        if(elem.value < 0){
            alert("Введите неотрицательное число");
            elem.value = 0;
        }
        else{
            let key = elem.id;
            countGoods[key] = elem.value;
        }
        finalPrice();
    })
})

goodsElements.forEach(product => {
    product.addEventListener("change",function(){
        if(product.checked){
            chosenPriceGoods[product.dataset.goods] = product.value;
        }
        else{
            chosenPriceGoods[product.dataset.goods] = 0;
        }
        finalPrice();
    })
})

btn.addEventListener("click",function(){
    if(sum != 0)
    alert(`Customer: ${userName.value} ${userSurname.value} \n
        Total price: ${sum} р.`);
    else{
        alert("There is nothing to purchase!");
    }
})


