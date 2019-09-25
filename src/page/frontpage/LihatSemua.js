import {Container, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const LihatSemua = (props) => {
    if (typeof(props.type) !== 'undefined' && props.type === 'row') {
        return (
            <Row>
                <div className="font-green offset-10 col-sm-2 text-right pr-0 mr-0 mb-5">
                    <FontAwesomeIcon icon={faPlusCircle} className="mr-1"/>Lihat Semua
                </div>
            </Row>
        );
    } else {
        return (
            <Container>
                <div className="font-green text-right mt-3">
                    <FontAwesomeIcon icon={faPlusCircle} className="mr-1"/>Lihat Semua
                </div>
            </Container>
        );
    }
}
