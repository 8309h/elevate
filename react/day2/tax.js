import { createTestAccount } from "nodemailer";

function createTaxCaluculator(taxrate) {
      return function (price) {
            return price + price * taxrate;
      }
}

const addGst = createTaxCaluculator(0.18)
console.log(addGst(1000))
console.log(addGst(500))


const fivePrcent = createTaxCaluculator(0.05)
console.log(fivePrcent(1000))