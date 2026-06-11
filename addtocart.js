function increaseCounter(counterId, amountId) {
 const counterLabel = document.getElementById(counterId);
 let quantity = Number(counterLabel.textContent) + 1;
 counterLabel.textContent = quantity;
 //calculateTotal();
}

function decreaseCounter(counterId, amountId) {
 const counterLabel = document.getElementById(counterId);
 let current = Number(counterLabel.textContent);
 if (current > 0) {
 counterLabel.textContent = current - 1;
 //calculateTotal();
 }
}

function parsePrice(priceStr) {
 // Remove ¥ or $, commas, and anything in parentheses like (+tax)
 let cleaned = priceStr.replace(/[¥$,]/g, '').replace(/\(.*\)/, '').trim();
 return Number(cleaned);
}

function calculateTotal() {
 const counters = document.querySelectorAll('.count');
 const amounts = document.querySelectorAll('.amount');
 alert(counters)
 let grandTotal = 0;
 let totalItems = 0;
/*
  for (let i = 0; i < counters.length; i++) 
  {
    let qty = Number(counters i.textContent);
    let price = parsePrice(amounts i.textContent);
    
   
    if (!isNaN(price)) {
      grandTotal += qty * price;
    }
   
    totalItems += qty;
 }

 document.getElementById('total').textContent = '¥' + grandTotal.toLocaleString();
 document.getElementById('itemsCount').textContent = totalItems + ' item' + (totalItems!== 1? 's': '');
 */
}
