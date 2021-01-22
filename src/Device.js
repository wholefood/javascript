import React from 'react'

function Device({mydevice}){
    console.log(JSON.stringify(mydevice));
    //const {mydevice} = data;
    return <div>My Device, {mydevice} !</div>    

    
    
}

export default Device;