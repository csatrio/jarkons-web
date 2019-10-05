import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default (props) => {
    const {rating, maxRating} = props;
    const roundedRating = Math.round(rating);
    return (
        <React.Fragment>
            {Array.apply(null, {length: maxRating}).map((e, index) => {
                const starColor = index < roundedRating ? '#ffd500' : '#ebe9e4';
                return <FontAwesomeIcon key={'starrating-' + index} icon={faStar} color={starColor}/>
            })}
        </React.Fragment>
    )
}
