export function validEmail(email) {
    var re = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$/gm;
    return re.test(email);
};

export function validPhone(phone) {
    var re = /(09|01[2|6|8|9])+([0-9]{8})\b/g;
    return re.test(phone);
};

export function validDate(date) {
    const now = new Date();
    if (!date || (new Date(date) > now)) return false;
    return true;
};