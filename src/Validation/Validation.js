import React from 'react';

const validation = (props) => {

    const msg = props.length < 5 ? (<p>Text too short</p>) : props.length > 15 ? <p>Text too large</p> : null;
    return(
        <div>
           {msg}
        </div>
    )
}

export default validation