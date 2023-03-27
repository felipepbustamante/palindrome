let assert = require("assert");
let Phrase = require("../index.js");


describe("Phrase", function () {
    describe("#palindrome", function () {
        it("should return false for anon-palindrome", function () {
            let nonPalindrome = new Phrase("apple");
            assert(!nonPalindrome.palindrome());
        });

        it("should return false for a plain palindrome", function () {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });

        it("should return ture for a mixed-case palindrome", function () {
            let mixedCasePalindrome = new Phrase("RaceCar");
            assert(mixedCasePalindrome.palindrome());
        });
        it("should return ture for a palindrome with puctuation", function () {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.letters() === "MadamImAdam");
        });
    });

    describe("#letters", function () {
        it("should return only letters", function () {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
        });

    });
});


