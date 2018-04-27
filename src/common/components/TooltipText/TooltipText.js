// @flow
import React from "react";

import "./tooltipText.scss";

type Props = {
    className?: string,
    tooltip?: string,
    children: string
};

type State = {
    overflowing: boolean
};

class TooltipText extends React.Component<Props, State> {
    state = {
        overflowing: false
    };

    componentDidMount() {
        this.updateOverflowing();
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.children !== this.props.children) {
            this.updateOverflowing();
        }
    }

    element: ?HTMLDivElement;

    updateOverflowing = () => {
        if (this.element) {
            this.setState({
                overflowing: this.element.scrollWidth > this.element.clientWidth
            });
        }
    };

    render() {
        const {className, children, tooltip} = this.props;
        const {overflowing} = this.state;

        return (
            <div className="tooltipText">
                <div className={className} ref={element => this.element = element}>{children}</div>
                {overflowing && <span className="tooltip">{tooltip || children}</span>}
            </div>
        );
    }
}

export default TooltipText;
