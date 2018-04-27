// @flow
import React from "react";

import {Loading} from "common/components";

import "./disabledOverlay.scss";

type Props = {
    active: boolean,
    message?: ?string
};

const DisabledOverlay = ({active, message}: Props) => {
    return (
        <div className={"disabledOverlay" + (active ? " active" : "")}>
            {active && <div className="overlay"/>}
            {active && <Loading size={48} message={message}/>}
        </div>
    );
};
export default DisabledOverlay;
