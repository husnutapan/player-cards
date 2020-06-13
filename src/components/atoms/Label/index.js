import React from "react";


type Props = {
    className: string,
    children?: React.ReactNode,
    className?: string
}

const Label = (props: Props): React.Element<*> => {
    const {children, className} = props;
    return (
        <label className={className}>{children}</label>
    )
};
export default Label