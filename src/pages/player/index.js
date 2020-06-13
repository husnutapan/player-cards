import React from "react";
import PlayerList from "../../components/templates/PlayerList";

type Props = {
    size: string,
    onClick: Function,
    className: string,
    disabled: boolean,
    children?: React.ReactNode
}

const Player = (props: Props): React.Element<*> => {
    const {className, children, value} = props;
    return (<PlayerList></PlayerList>)
};
export default Player