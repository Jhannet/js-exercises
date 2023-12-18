var isValid = function(s) {
    if (s.length % 2 !== 0)
        return false;

    const map = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const signs = s.split('');
    const openSigns = [];

    for (let i = 0; i < signs.length; i++) {
        if (map[signs[i]]) {
            openSigns.push(signs[i]);
        } else {
            let lastOpenedBracket = openSigns.pop();

            if (map[lastOpenedBracket] !== signs[i]) {
                return false;
            }
        }
    }

    return openSigns.length === 0;
};

console.log(isValid("()[]{]"))