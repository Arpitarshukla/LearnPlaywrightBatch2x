//Deconstructing of Object

const user = { name1: "John", age: 30, city: "NYC" };

//Basic deconstructuring
const { name1, age } = user;   // we can deconstruct and take out name1 and age from the user
console.log(name1); // John
console.log(age); //30

//This concept is used in playwright


//Rename variables is also possible
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);


//deconstruction ---> I want only age from user
//const { age } = user;


//default values
const { country = "USA" } = user;
console.log(country);
console.log(user);


//Object within object within object

const data = {                    //Object
    user:
    {                           // within object
        name: "John", address:
        {
            city: "NYC"        // within object
        }
    }
};

//want to fetch the value of user
const { user: { address: { city } } } = data;
console.log(data.user.address.city);   // we can use: data. user. address. city --> to navigate to the objects- user:,add: and city:







