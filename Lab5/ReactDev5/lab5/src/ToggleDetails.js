import React, { useState } from "react";

function ToggleDetails(){
    const [show,setShow]=useState(false);
    return(
        <div>
            <button onClick={()=>setShow(prev => !prev)}>
            {show ? 'Ukryj szczegoly' : 'Pokaz szczegoly'}
            </button>
            {show && <p>To są szczegół które można ukryć i pokazać</p>}
        </div>
    );
}

export default ToggleDetails;