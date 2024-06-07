const randomString = (len) => {
    const arrText = [];
    const String =
        "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxy";
    for (let i = 0; i < len; i++) {
        const random = Math.floor(Math.random() * 60);
        arrText.push(String[random]);
    }
    return arrText.join("");
};
module.exports = randomString;
