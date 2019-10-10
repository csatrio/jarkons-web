import React from 'react';
import {Collapse} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {coalesce} from "../../util";

class Collapsible extends React.Component {
    state = {
        clicked: false,
        activeChild: -1
    }

    render() {
        const {children, section, sectionClass, clickerClass, clickerIconUp, clickerIconDown, className, activeClass} = this.props;
        const _activeClass = typeof(activeClass) === 'undefined' ? ' font-green' : ' ' + activeClass;
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
                    {React.Children.map(children, (child, index) => {
                        const {className} = child.props
                        const isActive = this.state.activeChild == index;
                        const cloneChild = React.cloneElement(child, {
                            className: isActive ? className + _activeClass : className,
                            onClick: () => this.setState({activeChild: index})
                        })
                        return cloneChild
                    }, this)}
                </Collapse>
            </div>
        )
    }

    reset = () => {
        this.setState({activeChild: -1})
    }

}

export default Collapsible
