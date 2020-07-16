import React from 'react'

function TitleThree({paragraph,pOne,redcontent,pTwo}) {
    return (
        <div>
            
    <h3>{pOne} <code ><em style={{color:'red',fontWeight:'800'}}>{redcontent}</em></code> {pTwo}</h3>
    <p>{paragraph}</p>
        </div>
    )
}

export default TitleThree
