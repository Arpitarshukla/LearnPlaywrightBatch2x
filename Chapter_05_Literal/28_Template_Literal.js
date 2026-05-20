let firstname = "Prrammod";
let fullname = `Hi ${firstname} Dutta`; //${firstname} is a placeholder that will be replaced by the value of the variable firstname.
console.log(fullname); //Hi Prrammod Dutta

//Template literals are enclosed by the back-tick (` `) character instead of double or single quotes. 



let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl); //https://api-prod.tekion.com/users/12345

//Template literals can also span multiple lines without the need for concatenation or escape characters.

//Playwright 
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-column="${columnName}"]`).click();
console.log(`Clicked on cell at row ${rowIndex} and column ${columnName}`); //Clicked on cell at row 3 and column email

//Logs
const testName = "Login Test";
const status = "Failed";
const duration = 3.5;
console.log(`[${status}] ${testName} completed in ${duration}s`); //[Failed] Login Test completed in 3.5s

//Screenshot example
const testCase = "checkout flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}-${timestamp}.png` });
console.log(`Screenshot saved for test case: ${testCase}`); //Screenshot saved for test case: checkout flow


const username = "john_doe";
const role = "admin";

const payload = `{
"user":"${username}",
"role":"${role}" 
"timestamp":"${new Date().toISOString()}"
}`;
console.log(payload); 
