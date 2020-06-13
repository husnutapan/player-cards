import React, {useState} from "react";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import Popup from "../../molecules/Popup";

type Props = {
    size: string,
    onClick: Function,
    className: string,
    disabled: boolean,
    children?: React.ReactNode,
    data?: Array
}


const PlayerInfo = (props: Props): React.Element<*> => {
    const {className, children, value, data} = props;

    const [showPopup, setShowPopup] = useState(false);

    let showDetail = function () {
        setShowPopup(true);
    };
    let closePopup = function () {
        setShowPopup(false);
    };
    return (
        <div>
            <Popup isOpen={showPopup} popupName="Player Detail" closePopup={closePopup}></Popup>
            <div className={`container ${className}`}>
                <div className="row">
                    {data.map(player => (
                        <div className="card col-4" key={player.identifier}>
                            <Image imgSrc={player.img2}/>
                            <div className="card-body">
                                <h5 className="card-title">{player.first_name} {player.last_name}</h5>
                                <p className="card-text">Team: {player.team}</p>
                                <p className="card-text">Position: {player.position}</p>
                                <Button onClick={showDetail} type={"primary"}>Show Detail</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
export default PlayerInfo