function countHours(year, holidays) {
    let counter = 0;

    holidays.forEach(holiday => {
        const day = new Date(`${holiday}/${year}`).getDay();
        if (day !== 0 && day !== 6)
            counter++;
    });

    return counter*2;
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

console.log(countHours(year, holidays)) // 2 days -> 4 extra hours in the year