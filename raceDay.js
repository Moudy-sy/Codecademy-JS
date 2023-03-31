// Math.random return between 0 and 1
let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegistered = false;
let runnerAge = 17

if (runnerRegistered && runnerAge > 18)
    raceNumber += 100;

if (runnerRegistered && runnerAge > 18) {
    console.log(`Race will begin at 9:30AM, your race number is: ${raceNumber}`)
}
else if (!runnerRegistered && runnerAge > 18) {
    console.log(`Race will begin at 11:00AM, your race number is: ${raceNumber} `)
}
else if (runnerAge < 18) {
    console.log(`Race will begin at 12:30PM, your race number is: ${raceNumber}`)
}
else
    console.log('Please approach the registration deks, Thanks!')
