function discountPrice(price) {
  var discountAmount = price * 0.25;
  var discountPrice = price - discountAmount;
  return discountPrice;
}

var originalPrice = 100;
var discountPrice = discountPrice(originalPrice);
var finalAmount = discountPrice;
var hasCoupon = true;
if (hasCoupon) {
  finalAmount -= 10;
}
var subtotal = finalAmount;
finalAmount = subtotal;

console.log("Your grand total is $" + finalAmount.toFixed(2) + ".");
return "Your grand total is $" + finalAmount.toFixed(2) + ".";
