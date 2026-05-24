// --- same example as previous one
// here, break is removed and if hit run
// the moment it matches, eg (day 2) it will execute all of them..

let day = 2;                    //if day=10, it will select invalid day value 
switch (day) {
    case 0:
        console.log('Sunday-Rest day');
    case 1:
        console.log('Monday- Sprint Planning');
    case 2:
        console.log('Tuesday- Development');
    case 3:
        console.log('Wednesday- Code review');
    case 4:
        console.log('Thursday- Testing');
    case 5:
        console.log('Friday- Deployment & Retro');
    case 6:
        console.log('Satday-Rest day');
    default:
        console.log("Invalid day value");
}