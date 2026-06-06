let config1 = { browser: "Chrome", timeout: 3000 };
//Modifying properties --Allowed
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1); // sol: { browser: 'Firefox', timeout: 5000, retries: 2 }



config1 = { browser: "Safari" };
console.log(config1);   // sol:{ browser: 'Safari' }

//print
console.log("----- "); // sol: ----- 






const config = { browser: "Chrome", timeout: 3000 };
//Modifying properties --Allowed
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config); // sol:{ browser: 'Firefox', timeout: 5000, retries: 2 }

// config ={browser: "Safari"};
console.log(config); // sol: { browser: 'Firefox', timeout: 5000, retries: 2 }
















