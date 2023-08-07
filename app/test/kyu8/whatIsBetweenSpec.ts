import { assert } from "chai";
import { describe } from "mocha"
import { between } from "../../main/kyu8/WhatIsBetween";

describe("Basic tests", () => {
    it("Basic tests should work", () => {
        assert.deepEqual(between(1, 4), [1, 2, 3, 4]);
        assert.deepEqual(between(-2, 2), [-2, -1, 0, 1, 2]);
    });
});