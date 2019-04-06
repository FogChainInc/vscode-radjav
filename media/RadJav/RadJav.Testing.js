var RadJav;
(function (RadJav) {
    var Testing;
    (function (Testing) {
        var TestingAPI = (function () {
            function TestingAPI(test) {
                this.test = test;
            }
            TestingAPI.prototype.success = function (message) {
                if (message === void 0) { message = ""; }
                this.test.passed.push(true);
                this.test.results.push(message);
            };
            TestingAPI.prototype.error = function (message, expected, result) {
                if (message === void 0) { message = ""; }
                if (expected === void 0) { expected = undefined; }
                if (result === void 0) { result = undefined; }
                this.test.passed.push(false);
                this.test.results.push(message);
            };
            TestingAPI.prototype.assert = function (expression, errorMessage) {
                if (errorMessage === void 0) { errorMessage = ""; }
                if (expression == true)
                    this.success();
                else
                    this.error(errorMessage);
            };
            TestingAPI.prototype.equal = function (expected, result, message) {
                if (message === void 0) { message = ""; }
                if (expected == result)
                    this.success(message);
                else
                    this.error();
            };
            TestingAPI.prototype.notEqual = function (expected, result, message) {
                if (message === void 0) { message = ""; }
                if (expected != result)
                    this.success(message);
                else
                    this.error();
            };
            TestingAPI.prototype.greaterThan = function (result, greaterThanThisNumber, message) {
                if (message === void 0) { message = ""; }
                if (result > greaterThanThisNumber)
                    this.success(message);
                else
                    this.error();
            };
            TestingAPI.prototype.lessThan = function (result, lessThanThisNumber, message) {
                if (message === void 0) { message = ""; }
                if (result > lessThanThisNumber)
                    this.success(message);
                else
                    this.error();
            };
            TestingAPI.prototype.isNumber = function (obj, message) {
                if (message === void 0) { message = ""; }
                if (typeof (obj) == "number")
                    this.success(message);
                else
                    this.error();
            };
            TestingAPI.prototype.isString = function (obj, message) {
                if (message === void 0) { message = ""; }
                if (typeof (obj) == "string")
                    this.success(message);
                else
                    this.error();
            };
            TestingAPI.prototype.isArray = function (obj, message) {
                if (message === void 0) { message = ""; }
                if (obj instanceof Array)
                    this.success(message);
                else
                    this.error();
            };
            TestingAPI.prototype.isObject = function (obj, message) {
                if (message === void 0) { message = ""; }
                if (typeof (obj) == "object")
                    this.success(message);
                else
                    this.error();
            };
            return TestingAPI;
        }());
        Testing.TestingAPI = TestingAPI;
        var Test = (function () {
            function Test(name, applicationPath) {
                this.name = name;
                this.passed = [];
                this.results = [];
                this.applicationPath = applicationPath;
                this.func = null;
            }
            Test.prototype.execute = function () {
                var promise = new Promise(function (resolve, reject) {
                    this.func();
                    resolve(this);
                });
                return (promise);
            };
            return Test;
        }());
        Testing.Test = Test;
        var FunctionalTests = (function () {
            function FunctionalTests(applicationPath) {
                this.applicationPath = applicationPath;
                this.tests = [];
            }
            FunctionalTests.prototype.addTest = function (test) {
                if (typeof (test) == "function") {
                    var tempFunc = test;
                    test = new Test(this.applicationPath, this.applicationPath);
                    test.func = tempFunc;
                }
                this.tests.push(test);
            };
            FunctionalTests.prototype.execute = function () {
                var promise = new Promise(function (resolve, reject) {
                    var promises = [];
                    for (var iIdx = 0; iIdx < this.tests.length; iIdx++) {
                        var test = this.tests[iIdx];
                        promises.push(test.execute());
                    }
                    return (Promise.all(promises).then(function (tests) {
                        resolve(tests);
                    }));
                });
                return (promise);
            };
            return FunctionalTests;
        }());
        Testing.FunctionalTests = FunctionalTests;
        var KeyboardSimulator = (function () {
            function KeyboardSimulator() {
            }
            KeyboardSimulator.keyPress = function (key) {
            };
            return KeyboardSimulator;
        }());
        Testing.KeyboardSimulator = KeyboardSimulator;
        var MouseSimulator = (function () {
            function MouseSimulator() {
            }
            MouseSimulator.click = function (button) {
            };
            MouseSimulator.setPosition = function (pos) {
            };
            return MouseSimulator;
        }());
        Testing.MouseSimulator = MouseSimulator;
        var TouchSimulator = (function () {
            function TouchSimulator() {
            }
            TouchSimulator.setPosition = function (pos) {
            };
            return TouchSimulator;
        }());
        Testing.TouchSimulator = TouchSimulator;
        var AccelerometerSimulator = (function () {
            function AccelerometerSimulator() {
            }
            AccelerometerSimulator.shake = function (pos) {
            };
            return AccelerometerSimulator;
        }());
        Testing.AccelerometerSimulator = AccelerometerSimulator;
    })(Testing = RadJav.Testing || (RadJav.Testing = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Testing.js.map