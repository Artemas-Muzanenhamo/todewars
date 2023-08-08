import { assert } from "chai";
import { reverseList } from "../../main/kyu8/ReverseList";

describe("reverseList", function(){
    it("should reverse some sample arrays", function(){
        assert.deepEqual(reverseList([1,2,3,4]), [4,3,2,1], "Input=[1,2,3,4]");
        assert.deepEqual(reverseList([3,1,5,4]), [4,5,1,3], "Input=[3,1,5,4]");
    });
});