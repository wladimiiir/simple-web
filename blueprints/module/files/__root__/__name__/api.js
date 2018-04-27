// @flow
import {ApiCall} from "common/api";

export default {
    testMe() {
        return new ApiCall("/ping");
    }
};
