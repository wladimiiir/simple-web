// @flow
import React from "react";

type Props = {
    text: string,
    onClick: () => void
};

const Button = ({text, onClick, ...other}: Props) => (
    <button onClick={onClick} {...other}>{text}</button>
);

export default Button;
