import React, {useEffect, useState} from "react";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import Popup from "../../molecules/Popup";

type Props = {
}


const Banner = (props: Props): React.Element<*> => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Players</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>

    )
};
export default Banner