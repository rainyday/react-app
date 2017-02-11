import * as React from 'react';

export interface Props {
    name: string;
}

export interface State {}

export default class Hello extends React.Component<Props, void> {
    render() {
        return <div>Hello, { this.props.name }</div>
    }
}