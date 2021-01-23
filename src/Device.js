import React,{Component} from 'react'
import axios from 'axios'

// const myData = {
//     "myDeviceData":[
//         {
//             "name" : "iPadPro",
//             "RAM" : 6,
//             "HomeButton" : false,
//             "TouchID" : "NO",
//             "FaceID" : "YES"
//         },
//         {
//             "name" : "iPhoneXs",
//             "RAM" : 4,
//             "HomeButton" : false,
//             "TouchID" : "NO",
//             "FaceID" : "YES"
//         }
//     ]
// }

class Device extends React.Component{  
    constructor(props){
        super(props);
        console.log('#### constructor');
    }

    componentWillMount(){
        console.log('#### componentWillMount');
    }

    getData = async()=> {
        try{
            const data = await axios.get('/');
            console.log('#### data : ' , data );
            return data
        }catch(error){
            console.log('#### error : ',error)
        }

       
    }

    componentDidMount(){
        console.log('#### componentDidMount');
        this.getData();
    }

    componentDidUpdate(){
        console.log('#### componentDidUpdate');
    }


    
    render(){
        return <div>
            Here is my Device Component
        </div>
    }
}

export default Device;