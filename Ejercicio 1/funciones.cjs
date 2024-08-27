function esPrimo(x) {
  if (x <= 1) return console.log(`Tu número ${x} no es primo`);
  if (x === 2) return console.log(`Tu número ${x} es primo`);
  if (x % 2 === 0) return console.log(`Tu número ${x} no es primo`);

  for (let i = 3; i * i <= x; i += 2) {
    if (x % i === 0) return console.log(`Tu número ${x} no es primo`);
  }

  console.log(`Tu número ${x} es primo`);
}

module.exports = esPrimo;
