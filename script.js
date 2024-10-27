const stones = [
{name: "Diamant", price:1100, quantity:4 },
{name: "Smaragd", price:1500, quantity:3 },
{name: "Cupfir", price:1000, quantity:2 },

];

function calcTotalPrice(arr, name) {
    let sum = 0;

    for(const stone of arr) {
      if(stone.name === name) {
        sum += stone.price * stone.quantity;
      }
    }
    return sum;
  }
 


console.log(calcTotalPrice(stones, "Cupfir"));
