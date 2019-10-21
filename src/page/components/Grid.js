import React from 'react';
import {Col, Row} from 'reactstrap';

export default class Grid extends React.Component {

    render() {
        const {data, itemPerRow, rowClass, colClass, renderCallback} = this.props
        const renderCb = typeof(renderCallback) === 'undefined' ? (e) => e : renderCallback;
        let startIndex = 0;
        let rowCount = Math.round(data.length / itemPerRow);
        rowCount = (data.length - (rowCount * itemPerRow)) > 0 ? (rowCount + 1) : rowCount;
        return (
            <React.Fragment>
                {Array.apply(null, {length: rowCount}).map((y, rowIndex) => {
                        const rowItem = Array.apply(null, {length: itemPerRow}).map((x, itemIndex) => {
                                if (typeof(data[startIndex + itemIndex]) !== 'undefined') {
                                    return <Col className={colClass}
                                                key={`gridcol-${startIndex}${itemIndex}`}>{renderCb(data[startIndex + itemIndex])}</Col>
                                } else {
                                    return <Col key={`gridcol-${startIndex}${itemIndex}`} className={colClass}></Col>
                                }
                            }
                        )
                        startIndex += itemPerRow
                        return <Row className={rowClass} key={`gridrow-${startIndex}${rowIndex}`}>{rowItem}</Row>
                    }
                )}
            </React.Fragment>
        );

    }
}
