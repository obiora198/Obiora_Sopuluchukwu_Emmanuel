function getDays(dob) {
    const date = new Date(dob);
    const now = new Date();
    const days = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    return `${days} days since ${dob}`;
}

// testing
console.log(getDays("03/25/2015"));