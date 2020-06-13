import React from "react";
import Label from "../../atoms/Label";
import Button from "../../atoms/Button";

type Props = {
    size: string,
    onClick: Function,
    className: string,
    disabled: boolean,
    children?: React.ReactNode,
    buttonValue?: string,
    labelValue?: string
}


const Row = (props: Props): React.Element<*> => {
    const {className, children, buttonValue, labelValue} = props;
    return (
        <div>
            <Label className={className}>{labelValue}</Label>
            <Button type="primary">{buttonValue}</Button>
        </div>
    )
};
export default Row