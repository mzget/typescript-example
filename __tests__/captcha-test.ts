import { Captcha } from "../captcha/captcha";


describe('Captcha', function () {
    describe('pattern 1', function () {
        it('WTF "1 + Two"', function () {
            let captcha = new Captcha();
            expect(captcha.generate(1, 1, 2, 1)).toEqual("1 + Two");
        })

        it("WTF2 1 + Three", function () {
            let captcha = new Captcha();
            expect(captcha.generate(1, 1, 3, 1)).toEqual("1 + Three");
        })
    })

    describe('pattern 2', function () {
        it('WTF "Two + 1"', function () {
            let captcha = new Captcha();
            expect(captcha.generate(2, 1, 2, 1)).toEqual("Two + 1");
        })

        it(`WTF2 "Three + 1"`, function () {
            let captcha = new Captcha();
            expect(captcha.generate(2, 1, 3, 1)).toEqual("Three + 1");
        })
    })
})