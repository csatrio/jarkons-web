import React from 'react';

export default function (props) {
    const {className, text, style} = props;
    const data = (text !== null && typeof(text) !== 'undefined') ? text.split('\n') : [];
    return (
        <React.Fragment>
            {data.flatMap(e => e.length > 0 ?  <p className={className} style={style}>{e}</p> : [])}
        </React.Fragment>
    );
}
