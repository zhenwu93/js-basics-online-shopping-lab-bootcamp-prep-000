var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { itemName: item, itemPrice: Math.floor(Math.random()*100) };
  cart.push(newItem);
  return newItem.itemName + " has been added to your cart.";
}

  function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" +
    cart[0].itemPrice + "." ;
  } else if (cart.length === 2) {
    return "In your cart, you have " + cart[0].itemName + " at $" +
    cart[0].itemPrice +  ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + "." ;
  } else {
    var itemArray = [];
    for(let i = 0; i < cart.length; i++) {
      itemArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    itemArray[itemArray.length - 1] = `and ${itemArray[itemArray.length - 1]}`;
    return `In your cart, you have ${itemArray.join(", ")}.`
  }
}

function total() {
  var totalCost = 0;
  for(let i = 0; i < cart.length; i++) {
      totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
    }
  }
  return "That item is not in your cart."

  var itemIndex = getCart().indexOf(item);
    if(cart.includes(item)) {
      cart = cart.splice(itemIndex , 1);
      return cart;
    } else {
      return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    var cartTotal = total();
    setCart([]);
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
    } else {
    return "Sorry, we don't have a credit card on file for you."
   }
  }
