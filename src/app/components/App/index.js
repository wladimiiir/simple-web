// @flow
import {LazyComponent} from "common/components";

export default LazyComponent(() => import("./App" /* webpackChunkName: "app" */), {className: "expand"});
