var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sum(array) {
  var reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer)
}

function calculateSalesTax(salesData, taxRates) {
  var resultSales = {};

  for (var i = 0; i < salesData.length; i++) {
    var companyName = salesData[i]['name'];
    //console.log(resultSales[companyName]);
    if (!resultSales.hasOwnProperty(companyName)) {
      resultSales[companyName] = {};
      resultSales[companyName]['totalSales'] = 0;
      resultSales[companyName]['totalTaxes'] = 0;
    }
    var province = salesData[i]['province'];
    var sumOfSales = sum(salesData[i]['sales']);
    var provinceTaxRate = taxRates[province];
    var taxes = provinceTaxRate * sumOfSales;
    //console.log(taxes);
    resultSales[companyName]['totalSales'] += sumOfSales;
    resultSales[companyName]['totalTaxes'] += taxes;
  }
  return resultSales;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/