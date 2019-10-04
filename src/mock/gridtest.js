import React from 'react';
import Grid from '../page/components/Grid';
import {Card} from 'reactstrap';

export default class GridTest extends React.Component {

    gridRender = (item) => {
        return (
            <Card className="mb-2 text-center m-2">{item}</Card>
        )
    }

    render() {
        const data = [];
        for (let i = 1; i <= 34; i++) {
            data.push(i);
        }
        return <Grid itemPerRow={4} data={data} renderCallback={this.gridRender}/>
    }
}
