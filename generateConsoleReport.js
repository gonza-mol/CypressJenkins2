const pruebaJson = require("./reports/My_new_report.json");
const fs = require("fs");
module.exports = pruebaJson;

let testTotales = 0;
let testPasados = 0;
let testFallados = 0;
let testSkipped = 0;

let data = "";

console.log("POST-PROCESAMIENTO de reporte Json");

pruebaJson.results[0].suites.forEach((suite, idSuite) => {
  console.log(`SUITE ${idSuite + 1} - ${suite.title}`);
  data += `SUITE ${idSuite + 1} - ${suite.title} \n`;

  suite.tests.forEach((test, idTests)=> {
    console.log(`TEST ${idTests + 1} - ${test.title}- ${test.state}`);
    data += `TEST ${idTests + 1} - ${test.title}- ${test.state} \n`;
  
    switch(test.state) {
        case "passed":
            testPasados++;
            break;
        case "failed":
            testFallados++;
            break;   
        case "skipped":
            testSkipped++;
            break;
    }

  })

});

testTotales = testPasados+testFallados+testSkipped;
console.log(`Test Totales: ${testTotales}`);
console.log(`Test Pasados: ${testPasados}`);
console.log(`Test Fallados: ${testFallados}`);
console.log(`Test Skipped: ${testSkipped}`);

data += `Test Totales: ${testTotales} \n`;
data += `Test Pasados: ${testTotales} \n`;
data += `Test Fallados: ${testTotales} \n`;
data += `Test Skipped: ${testSkipped} \n`;

fs.writeFileSync("reports/resumenTests.txt", data);