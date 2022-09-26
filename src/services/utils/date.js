export function addDays(date, days) {
    // make a diff object that doesn't change the original new Date()
    const result = new Date(date);

    // make changes on the result object
    result.setDate(result.getDate() + days);
    return result;

}

// this function created if we want to make a diff format checking without break the code above
export function isSameDate(date, currentDayForCheck) {
    return date === currentDayForCheck.split("T")[0];
}

export function makeDaysOfWeek(day) {
    let weekDays = [];
    weekDays[1] = "Sunday";
    weekDays[2] = "Monday";
    weekDays[3] = "tuesday";
    weekDays[4] = "wednesday";
    weekDays[5] = "Thursday";
    weekDays[6] = "Friday";
    weekDays[7] = "Saturday";
    return weekDays[day];
}