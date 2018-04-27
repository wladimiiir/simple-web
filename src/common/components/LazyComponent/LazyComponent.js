// @flow
import * as React from "react";
import {Loading} from "common/components";

export type OptionsType = {
    className?: string,
    showLoading?: boolean
};

const defaultOptions = {
    showLoading: true
};

type Props = {};
type State = {
    Component: ?React.ComponentType<any>
};

export default (importComponent: Function, options?: OptionsType) => {
    return class LazyComponent extends React.Component<Props, State> {
        static Component: ?React.ComponentType<any> = null;
        state = {
            Component: LazyComponent.Component
        };

        constructor(props: Props) {
            super(props);
            this.loadComponent();
        }

        componentWillUnmount() {
            this.unmounted = true;
        }

        unmounted = false;

        async loadComponent() {
            if (this.state.Component) {
                return;
            }

            const module = await importComponent();
            const component = module.default;

            LazyComponent.Component = component;
            if (!this.unmounted) {
                this.setState({Component: component});
            }
        }

        getOptions = () => {
            return {
                ...defaultOptions,
                ...options
            };
        };

        render() {
            const {Component} = this.state;
            const options = this.getOptions();

            if (Component) {
                return <Component {...this.props}/>;
            }

            if (options.showLoading) {
                return (
                    <div className={options.className}>
                        <Loading size={24}/>
                    </div>
                );
            } else {
                return null;
            }
        }
    };
};
