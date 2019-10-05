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
        return (
            <React.Fragment>
                <Card className="p-2">
                    <div>Kategori <Clicker clicked={kategoriClicked} className="fa-pull-right"
                                           onClick={() => this.toggleClick('kategoriClicked')}/>
                    </div>
                    <Collapse isOpen={kategoriClicked}>
                        <div>Kontraktor</div>
                        <div>Tenaga Ahli</div>
                        <div>Supplier</div>
                    </Collapse>
                    <div>Lokasi <Clicker clicked={lokasiClicked} className="fa-pull-right"
                                         onClick={() => this.toggleClick('lokasiClicked')}/>
                    </div>
                    <Collapse isOpen={lokasiClicked}>
                        <div>Tangerang</div>
                        <div>Jakarta</div>
                        <div>Bogor</div>
                    </Collapse>
                    <div>Rating <Clicker clicked={ratingClicked} className="fa-pull-right"
                                         onClick={() => this.toggleClick('ratingClicked')}/>
                    </div>
                    <Collapse isOpen={ratingClicked}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </Collapse>
                </Card>
            </React.Fragment>
        )
    }

}
