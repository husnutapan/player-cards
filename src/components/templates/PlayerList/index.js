import React, {useEffect} from "react";
import PlayerInfo from "../../organisms/PlayerInfo";
import playerJson from "../../../data/playerlist.json"
import Banner from "../../organisms/Banner";

type Props = {
    size: string,
    onClick: Function,
    className: string,
    disabled: boolean,
    children?: React.ReactNode
}

const Player = (props: Props): React.Element<*> => {
    let data = [];
    return (
        <div>
            <Banner/>
            <PlayerInfo data={playerJson} className="gapBtwBanner"></PlayerInfo>
        </div>)
};
export default Player