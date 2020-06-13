import React from "react";
import PlayerInfo from "../../organisms/PlayerInfo";

type Props = {
    size: string,
    onClick: Function,
    className: string,
    disabled: boolean,
    children?: React.ReactNode
}

const Player = (props: Props): React.Element<*> => {
    return (<PlayerInfo></PlayerInfo>)
};
export default Player