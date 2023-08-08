import {reverseSeq} from "../../main/kyu8/ReversedSequence";
import {assert} from "chai";

describe("reverseSeq", function() {
    it("Sample Test", function() {
        assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
    });
});