import React from "react";

type Props = {
    className: string,
    children?: React.ReactNode,
    imgSrc?: string
}


const Image = (props: Props): React.Element<*> => {
    const {children, imgSrc} = props;
    return (
        <img className="w-25 p-3" src={imgSrc}/>
    )
};
export default Image