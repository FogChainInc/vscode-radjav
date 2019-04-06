/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    /** @class RadJav.Testing
    * The testing class.
    * Available on platforms: Windows,Linux,OSX,iOS,Android
    */
    namespace Testing {
        class TestingAPI {
            test: Test;
            constructor(test: Test);
            success(message?: string): void;
            error(message?: string, expected?: any, result?: any): void;
            assert(expression: boolean, errorMessage?: string): void;
            equal(expected: any, result: any, message?: string): void;
            notEqual(expected: any, result: any, message?: string): void;
            greaterThan(result: any, greaterThanThisNumber: any, message?: string): void;
            lessThan(result: any, lessThanThisNumber: any, message?: string): void;
            isNumber(obj: any, message?: string): void;
            isString(obj: any, message?: string): void;
            isArray(obj: any, message?: string): void;
            isObject(obj: any, message?: string): void;
        }
        class Test {
            name: string;
            passed: boolean[];
            results: string[];
            applicationPath: string;
            func: Function;
            constructor(name: string, applicationPath: string);
            execute(): Promise<Test>;
        }
        class FunctionalTests {
            applicationPath: string;
            tests: Test[];
            constructor(applicationPath: string);
            addTest(test: Test | Function): void;
            execute(): Promise<Test[]>;
        }
        /** Simulates keyboard input.
        * Available on platforms: Windows,Linux,OSX,iOS,Android
        */
        class KeyboardSimulator {
            static keyPress(key: string): void;
        }
        /** Simulates mouse input.
        * Available on platforms: Windows,Linux,OSX,iOS,Android
        */
        class MouseSimulator {
            static click(button: number): void;
            static setPosition(pos: Vector2): void;
        }
        /** Simulates touch input.
        * Available on platforms: Windows,Linux,OSX,iOS,Android
        */
        class TouchSimulator {
            static setPosition(pos: Vector2): void;
        }
        /** Simulates accelerometer input.
        * Available on platforms: iOS,Android
        */
        class AccelerometerSimulator {
            static shake(pos: Vector2): void;
        }
    }
}
