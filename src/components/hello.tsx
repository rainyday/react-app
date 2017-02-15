import * as React from 'react';

export interface Props {
    name: string;
}

export interface State {}

export default class Hello extends React.Component<Props, State> {
    render() {
        return <p>Hello, { this.props.name }</p>;
    }
}