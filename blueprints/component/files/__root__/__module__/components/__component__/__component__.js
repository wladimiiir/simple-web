// @flow
import React from "react";

import "./<%= cssName %>.scss";

type Props = {
<%= propsString %>
};

const <%= componentName %> = ({}: Props) => (
    <div className="<%= cssName %>">

    </div>
);
export default <%= componentName %>;
