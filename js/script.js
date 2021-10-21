function padString (str, strLenght, symb, right = true) {
   if (typeof str !== `string`) return `str is not string`;
   if (typeof strLenght !== `number` && isNaN(strLenght)) return `strLenght is not number`;
   if (typeof symb !== `string` && symb !== 1) return `symb not valid`;
   if (typeof right !== "boolean") return `right is invalid`;
   if (str.length >= strLenght) return str.substring(0, strLenght);

   let localString = ``;

   for (let i = str.length; i < strLenght; i++) {
       localString += symb;
   }
   return right ? str + localString : localString + str;
}

console.log (padString(`Hello`, 10, `*`));
console.log (padString(`Hello`, 10, `*`, false));