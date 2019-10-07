import React from 'react';
import {Collapse} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';

const coalesce = (value, defaultValue) => (typeof(value) !== "undefined") ? value : defaultValue;

class Collapsible extends React.Component {
    state = {clicked: false}

    render() {
        const {children, section, sectionClass, clickerClass, clickerIconUp, clickerIconDown, className} = this.props;
        const clickerUp = coalesce(clickerIconUp, faAngleUp);
        const clickerDown = coalesce(clickerIconDown, faAngleDown);
        const iconClass = typeof(clickerClass) !== 'undefined' ? clickerClass + ' fa-pull-right d-inline-flex' : 'fa-pull-right d-inline-flex';
        const _sectionClass = typeof(sectionClass) !== 'undefined' ? sectionClass + ' cursor-pointer' : 'cursor-pointer';
        return (
            <div className={className}>
                <div className={_sectionClass} onClick={() => this.setState({clicked: !this.state.clicked})}>
                    <div className="d-inline-flex font-weight-bold">{section}</div>
                    <FontAwesomeIcon icon={this.state.clicked ? clickerUp : clickerDown}
                                     className={iconClass}
                                     size="lg"/>
                </div>
                <Collapse isOpen={this.state.clicked}>
                    {children}
                </Collapse>
            </div>
        )
    }

}

export default Collapsible
