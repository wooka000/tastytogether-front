const regPhone = /^\d{2,4}-\d{3,4}-\d{4}$/;
export const isValidPhoneNumber = (phoneNumber) => regPhone.test(phoneNumber);

const regHour = /^(0\d|1[0-2])$/;
export const isValidHour = (hour1, hour2) => regHour.test(hour1) && regHour.test(hour2);

const regMinute = /^[0-5]\d$/;
export const isvalidMinute = (minute1, minute2) =>
    regMinute.test(minute1) && regMinute.test(minute2);
