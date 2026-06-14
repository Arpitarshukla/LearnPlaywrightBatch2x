// Pyramid of Doom / Callback Hell--- Not using just for example

// Nested callbacks creating a pyramid shape (indentation grows rightwards)

console.log("========== PYRAMID OF DOOM EXAMPLES ==========\n");

// ----- Example 1: Food Ordering (7 levels deep) -----

function selectRestaurant(callback) {
    setTimeout(() => {
        console.log("1. Restaurant selected: Pizza Hut");
        callback();
    }, 500);
}

function placeOrder(callback) {
    setTimeout(() => {
        console.log("2. Order placed: Large Pepperoni Pizza");
        callback();
    }, 500);
}

function makePayment(callback) {
    setTimeout(() => {
        console.log("3. Payment done: $15.99");
        callback();
    }, 500);
}

function startCooking(callback) {
    setTimeout(() => {
        console.log("4. Cooking started...");
        callback();
    }, 500);
}

function packFood(callback) {
    setTimeout(() => {
        console.log("5. Food packed and ready");
        callback();
    }, 500);
}

function assignDelivery(callback) {
    setTimeout(() => {
        console.log("6. Delivery partner assigned");
        callback();
    }, 500);
}

function deliverFood(callback) {
    setTimeout(() => {
        console.log("7. Food delivered successfully!");
        callback();
    }, 500);
}

// Pyramid of Doom - Example 1
selectRestaurant(() => {
    placeOrder(() => {
        makePayment(() => {
            startCooking(() => {
                packFood(() => {
                    assignDelivery(() => {
                        deliverFood(() => {
                            console.log("\n✓ Order completed!\n");
                        });
                    });
                });
            });
        });
    });
});

// ----- Example 2: Nested Error Handling (3 levels with dual callbacks) -----

function loadUserData(success, fail) {
    setTimeout(() => {
        let loaded = true;
        loaded ? success({ id: 1, name: "John" }) : fail("User load failed");
    }, 200);
}

function loadPosts(userId, success, fail) {
    setTimeout(() => {
        let loaded = true;
        loaded ? success(["Post1", "Post2"]) : fail("Posts load failed");
    }, 200);
}

function loadComments(post, success, fail) {
    setTimeout(() => {
        let loaded = false;
        loaded ? success(["Comment1", "Comment2"]) : fail("Comments load failed");
    }, 200);
}

loadUserData((user) => {
    console.log("User loaded:", user.name);
    loadPosts(user.id, (posts) => {
        console.log("Posts loaded:", posts);
        loadComments(posts[0], (comments) => {
            console.log("Comments loaded:", comments);
        }, (err) => {
            console.log("ERROR at comments:", err);
        });
    }, (err) => {
        console.log("ERROR at posts:", err);
    });
}, (err) => {
    console.log("ERROR at user:", err);
});

// ----- Example 3: E-commerce Checkout (5 levels deep) -----

function addToCart(callback) {
    setTimeout(() => {
        console.log("Item added to cart");
        callback();
    }, 200);
}

function applyCoupon(callback) {
    setTimeout(() => {
        console.log("Coupon applied: SAVE20");
        callback();
    }, 200);
}

function calculateTax(callback) {
    setTimeout(() => {
        console.log("Tax calculated: $4.50");
        callback();
    }, 200);
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("Payment processed");
        callback();
    }, 200);
}

function confirmOrder(callback) {
    setTimeout(() => {
        console.log("Order confirmed! ID: #12345");
        callback();
    }, 200);
}

addToCart(() => {
    applyCoupon(() => {
        calculateTax(() => {
            processPayment(() => {
                confirmOrder(() => {
                    console.log("\n✓ Checkout complete!\n");
                });
            });
        });
    });
});

// ----- Example 4: Weather API Chained Calls (4 levels) -----

function fetchWeather(city, callback) {
    setTimeout(() => {
        console.log(`Weather fetched for ${city}: 28°C`);
        callback({ temp: 28, condition: "Sunny" });
    }, 300);
}

function fetchForecast(weather, callback) {
    setTimeout(() => {
        console.log("5-day forecast fetched");
        callback([28, 27, 26, 29, 30]);
    }, 300);
}

function fetchAirQuality(forecast, callback) {
    setTimeout(() => {
        console.log("Air quality index: 42 (Good)");
        callback({ aqi: 42, level: "Good" });
    }, 300);
}

function fetchUVIndex(airQuality, callback) {
    setTimeout(() => {
        console.log("UV Index: 6 (High)");
        callback({ uv: 6, risk: "High" });
    }, 300);
}

fetchWeather("Mumbai", (weather) => {
    fetchForecast(weather, (forecast) => {
        fetchAirQuality(forecast, (air) => {
            fetchUVIndex(air, (uv) => {
                console.log("\n✓ All weather data collected!\n");
            });
        });
    });
});

console.log("\n========== END OF PYRAMID OF DOOM ==========");
console.log("See how indentation grows like a pyramid?");
console.log("This is why we use Promises and async/await instead!");

