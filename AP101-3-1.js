function stampToDate(timeStamp) {
    let fullDate = new Date(timeStamp);
    let formatedDate = fullDate.toLocaleDateString();
    return formatedDate;
}

const date = new Date().getTime();

console.log(stampToDate(date));
