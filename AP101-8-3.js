function hoursPassed(timeStamp) {
    const presentTime = new Date().getTime();
    let timePassed = (presentTime - timeStamp) / (1000 * 60 * 60);
    timePassed = Math.round(timePassed);
    return `${timePassed} hours ago`;
}
// tesing
console.log(hoursPassed(1685349498790));