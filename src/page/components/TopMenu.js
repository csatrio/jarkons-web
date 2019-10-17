import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {Container} from "reactstrap";
import {inject, observer} from "mobx-react";
import {storeKeys} from "../../store";

@inject(...storeKeys)
@observer
class TopMenu extends React.Component {

    render() {
        const {LoginStore} = this.props;
        return (
            <Container className="text-right container-fluid">
                <NavLink className="font-top mr-3" to="/keuntungan">Keuntungan Iklan &
                    Membership</NavLink>
                <NavLink to="/lowongan" className="font-top mr-3">Lowongan Kerja</NavLink>
                <a href="#" className="font-top mr-3">Pusat Bantuan</a>
                <a href="#" className="font-top mr-3">Download App</a>
                {LoginStore.isLogin ? <a href="#" className="font-top mr-3" onClick={() => LoginStore.logout()}>Logout</a> : null}

            </Container>
        )
    }
}

export default withRouter(TopMenu)
