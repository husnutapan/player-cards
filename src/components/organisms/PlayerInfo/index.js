import React, {useEffect, useState} from "react";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import Popup from "../../molecules/Popup";

type Props = {
    size: string,
    onClick: Function,
    className: string,
    disabled: boolean,
    children?: React.ReactNode
}

const PlayerInfo = (props: Props): React.Element<*> => {
    const [showPopup, setShowPopup] = useState(false);
    let showDetail = function () {
        setShowPopup(true);
    };

    const {className, children, value} = props;
    return (
        <div>
            <Popup isOpen={showPopup}></Popup>
            <div className="card">
                <Image imgSrc={"https://www.ihs.com.tr/blog/wp-content/uploads/2017/12/url-nedir.png"}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <Button onClick={showDetail} type={"primary"}>Show Detail</Button>
                </div>
            </div>
        </div>

    )
};
export default PlayerInfo