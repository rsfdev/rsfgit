var inssAliquot;
var irAliquot;

var grossSalary = 20000.00;

if (grossSalary <= 1556.94) {
  inssAliquot = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  inssAliquot = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  inssAliquot = grossSalary * 0.11;
} else {
  inssAliquot = 570.88;
}

var baseSalary = grossSalary - inssAliquot;

if (baseSalary <= 1903.98) {
  irAliquot = 0;
} else if (baseSalary <= 2826.65) {
  irAliquot = baseSalary * 0.075 - 142.80;
} else if (baseSalary <= 3751.05) {
  irAliquot = baseSalary * 0.15 - 354.80;
} else if (baseSalary <= 4664.68) {
  irAliquot = baseSalary * 0.225 - 636.13;
} else {
  irAliquot = baseSalary * 0.275 - 869.36;
};

console.log("Salário: " + (baseSalary - irAliquot));