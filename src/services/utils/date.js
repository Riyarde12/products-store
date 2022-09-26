export function addDays(date, days) {
    // make a diff object that not change the original new Date()
    const result = new Date(date);

    // make changes on the result object
    result.setDate(result.getDate() + days);
    return result;

}

// this function created if we want to make a diff format checking without break the code above
export function isSameDate(date, currentDayForCheck) {
    console.log('example', currentDayForCheck);
    return date === currentDayForCheck.split("T")[0];
}