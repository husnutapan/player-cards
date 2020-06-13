import React from "react";


type Props = {
    className: string,
    disabled: boolean,
    children?: React.ReactNode,
    value?: string,
    type: string,
    onClick: Function
}

const Button = (props: Props): React.Element<*> => {
    const {children, disabled, value, type, onClick} = props;

    return (
        <button disabled={disabled} value={value} className={`btn btn-${type}`} onClick={onClick}>
            {children}
        </button>
    )
};
export default Button