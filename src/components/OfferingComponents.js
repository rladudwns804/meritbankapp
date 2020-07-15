import React, { Component } from 'react';
import axios from 'axios';

class Offering extends Component{

state= {
    offering1 : [],
    offering2: [],
    offering3: [],
    offering4: [],
    offering5: []
};

async componentDidMount(){
    axios.all([
        axios.get('http://localhost8080:/cdoffering/1'),
        axios.get('http://localhost8080:/cdoffering/2'),
        axios.get('http://localhost8080:/cdoffering/3'),
        axios.get('http://localhost8080:/cdoffering/4'),
        axios.get('http://localhost8080:/cdoffering/5')
    ])
    .then(axios.spread((offer1Res, offer2Res, offer3Res, offer4Res, offer5Res)=> { 
        const offer1 = offer1Res; const offer2 = offer2Res; const offer3 = offer3Res; const offer4 = offer4Res; const offer5 = offer5Res;
        this.setState({offer1, offer2, offer3, offer4, offer5}); console.log(offer1Res, offer2Res, offer3Res, offer4Res, offer5Res);}));
}




}

export default Offering;