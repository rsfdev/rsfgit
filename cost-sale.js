var costOfProduct = 1;
var saleValue = 3;

if (costOfProduct > 0 && saleValue > 0) {
  var totalProfit = (saleValue - costOfProduct) * 1000 * 0.20;
  console.log(totalProfit);
} else {
  console.log('Enter a value greater than zero');
};
testing