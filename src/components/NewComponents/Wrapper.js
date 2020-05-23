import React from 'react';

const Wrapper = (props) => {
    return(
        <div class='page'>
            <div class="wrapper">{props.children}</div>       
        </div>
    
    );
}

export default Wrapper;