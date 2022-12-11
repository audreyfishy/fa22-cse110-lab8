// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('isPhoneNumber', () => {
    test('Check valid number', () => {
        expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    });

    test('Check valid number', () => {
        expect(functions.isPhoneNumber('787-543-5344')).toBe(true);
    })

    test('Check invalid number', () => {
        expect(functions.isPhoneNumber('1131234678')).toBe(false);
    })

    test('Check invalid number', () => {
        expect(functions.isPhoneNumber('21-221-2-2-2')).toBe(false);
    })
})

describe('isEmail', () => {
    test('Check valid email', () => {
        expect(functions.isEmail('tkitazawa@ucsd.edu')).toBe(true);
    });

    test('Check valid email', () => {
        expect(functions.isEmail('kitazawatakuro@gmail.com')).toBe(true);
    })

    test('Check invalid email', () => {
        expect(functions.isEmail('japan.jp')).toBe(false);
    })

    test('Check invalid email', () => {
        expect(functions.isEmail('amazon.com')).toBe(false);
    })
})

describe('isStrongPassword', () => {
    test('Check valid password', () => {
        expect(functions.isStrongPassword('dwFWGA123')).toBe(true);
    });

    test('Check valid password', () => {
        expect(functions.isStrongPassword('DiwW42j32')).toBe(true);
    })

    test('Check invalid password', () => {
        expect(functions.isStrongPassword('w')).toBe(false);
    })

    test('Check invalid password', () => {
        expect(functions.isStrongPassword('?!?!?!??!?!?!')).toBe(false);
    })
})

describe('isDate', () => {
    test('Check valid date', () => {
        expect(functions.isDate('11/20/2022')).toBe(true);
    });

    test('Check valid date', () => {
        expect(functions.isDate('01/01/2000')).toBe(true);
    })

    test('Check invalid date', () => {
        expect(functions.isDate('90/334/2022')).toBe(false);
    })

    test('Check invalid date', () => {
        expect(functions.isDate('2/2000')).toBe(false);
    })
})

describe('isHexColor', () => {
    test('Check valid hex color', () => {
        expect(functions.isHexColor('AAA')).toBe(true);
    });

    test('Check valid hex color', () => {
        expect(functions.isHexColor('ffffff')).toBe(true);
    })

    test('Check invalid hex color', () => {
        expect(functions.isHexColor('1')).toBe(false);
    })

    test('Check invalid hex color', () => {
        expect(functions.isHexColor('11')).toBe(false);
    })
})