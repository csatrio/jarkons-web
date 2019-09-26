import {Container, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const LihatSemua = (props) => {
    const {onClick, className} = props
    const onclick = typeof(onClick) === 'undefined' ? () => alert('onClick not set!') : onClick
    const classname = typeof(className) === 'undefined' ? "" : " " + className;

    if (typeof(props.type) !== 'undefined' && props.type === 'row') {
        return (
            <Row className="cursor-pointer mr-3">
                <div className={"font-login-green offset-10 col-sm-2 text-right pr-0 mr-0 mb-5" + classname}
                     onClick={onclick}>
                    <FontAwesomeIcon icon={faPlusCircle} className="mr-1"/>Lihat Semua
                </div>
            </Row>
        );
    } else {
        return (
            <Container className="cursor-pointer" onClick={onclick}>
                <div className={"font-login-green text-right mt-1" + classname}>
                    <FontAwesomeIcon icon={faPlusCircle} className="mr-1"/>Lihat Semua
                </div>
            </Container>
        );
    }
}
