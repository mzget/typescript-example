/// <reference path="../typings/jest/jest.d.ts" />
describe('TypeScript', function () {
    describe('let', function () {
        it('use instead of var', function () {
            let x = 1;
            expect(x).toEqual(1);
        });
        it('assign in block scope not function scope', function () {
            let x = 1;
            if (true) {
                let x = 1;
            }
            expect(x).toEqual(1);
        });
    });
    describe('const', function () {
        it('cannot reassign twice', function () {
            const CONSTANT = 1;
        });
    });
    describe('type', function () {
        it('is number', function () {
            let x = 0;
            expect(x).toEqual(0);
        });
        it('is string', function () {
            let word = 'Hello TypeScript';
            expect(word).toEqual('Hello TypeScript');
        });
        describe('template string', function () {
            it('use for make string multiple line', function () {
                let word = ``;
                expect(word).toEqual('');
            });
            it('use for embed variable to string', function () {
                let luckyNumber = 7;
                let word = `lucky number is ${luckyNumber}`;
                expect(word).toEqual('lucky number is 7');
            });
        });
        it('is boolean', function () {
            let tf = true;
            expect(tf).toEqual(true);
        });
        describe('array', function () {
            it('use type Array<type> for assign array', function () {
                let numbers = [1, 2, 3];
            });
            it('can use <type>[] instead of Array', function () {
                let numbers = [1, 2, 3];
            });
        });
        describe('any', function () {
            it('can assign any type to variable', function () {
                let x = 'text';
                expect(x).toEqual('text');
            });
            it('implicit type any by default', function () {
                let x = "text";
                expect(x).toEqual('text');
            });
        });
    });
    describe('function', function () {
        describe('syntax', function () {
            it('use function keyword to declare function', function () {
                function something() {
                    return 'word';
                }
                expect(something()).toEqual('word');
            });
            it('can declare type', function () {
                function something() {
                    return 'word';
                }
                expect(something()).toEqual('word');
            });
        });
        describe('anonymous function', function () {
            it('declare with () =>', function () {
                const something = () => 'word';
                expect(something()).toEqual('word');
            });
        });
    });
    describe('union', function () {
        function padLeft(value, padding) {
            if (typeof padding === "number") {
                return Array(padding + 1).join(" ") + value;
            }
            if (typeof padding === "string") {
                return padding + value;
            }
            throw new Error(`Expected string or number, got '${padding}'.`);
        }
        describe('with padLeft example', function () {
            it('should padding 4 space when input padding with type number', function () {
                expect(padLeft('hello world', 4)).toEqual('    hello world');
            });
            it('should padding with character when input padding with type string', function () {
                expect(padLeft('hello world', '\n')).toEqual('\nhello world');
            });
            it('should throw error when input padding with other type', function () {
                function padLeftError() {
                    padLeft('hello world', true);
                }
                expect(padLeftError).toThrow(new Error("Expected string or number, got 'true'."));
            });
        });
    });
});
