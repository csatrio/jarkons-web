import React from 'react';
import {Card, Collapse} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';


const Clicker = (props) => {
    const {clicked, onClick, className} = props;
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={clicked ? faAngleUp : faAngleDown} onClick={onClick} className={className}/>
        </React.Fragment>
    );
}

export default class SearchFilter extends React.Component {

    state = {
        kategoriClicked: false,
        lokasiClicked: false,
        ratingClicked: false,
    }

    toggleClick = (elementName) => {
        const _state = {}
        _state[elementName] = !this.state[elementName]
        this.setState(_state);
    }

    render() {
        const {kategoriClicked, lokasiClicked, ratingClicked} = this.state
        const sectionClass = "font-lato-14 mb-2";
        const borderClass = "border-bottom border-dark";
        const clickerClass = "fa-pull-right";
        const sectionHeaderClass = "d-inline-flex mb-0 font-weight-bold";
        return (
            <React.Fragment>
                <Card className="p-2">
                    <div className={sectionClass}>
                        <p className={sectionHeaderClass}>Kategori</p>
                        <Clicker clicked={kategoriClicked} className={clickerClass}
                                           onClick={() => this.toggleClick('kategoriClicked')}/>
                        <div className={borderClass}></div>
                        <Collapse isOpen={kategoriClicked}>
                            <div className="font-lato-12">Kontraktor</div>
                            <div className="font-lato-12">Tenaga Ahli</div>
                            <div className="font-lato-12">Supplier</div>
                        </Collapse>
                    </div>

                    <div className={sectionClass}>
                        <p className={sectionHeaderClass}>Lokasi</p>
                        <Clicker clicked={lokasiClicked} className={clickerClass}
                                         onClick={() => this.toggleClick('lokasiClicked')}/>
                        <div className={borderClass}></div>
                        <Collapse isOpen={lokasiClicked}>
                            <div className="font-lato-12">Tangerang</div>
                            <div className="font-lato-12">Jakarta</div>
                            <div className="font-lato-12">Bogor</div>
                        </Collapse>
                    </div>

                    <div className={sectionClass}>
                        <p className={sectionHeaderClass}>Rating</p>
                        <Clicker clicked={ratingClicked} className={clickerClass}
                                         onClick={() => this.toggleClick('ratingClicked')}/>
                        <div className={borderClass}></div>
                        <Collapse isOpen={ratingClicked}>
                            <div className="font-lato-12">1</div>
                            <div className="font-lato-12">2</div>
                            <div className="font-lato-12">3</div>
                        </Collapse>
                    </div>

                </Card>
            </React.Fragment>
        )
    }

}
