import React, { Component } from 'react'
import axios from 'axios'

class wiki extends Component {



    componentDidMount() {

var s = "https://www.google.com/search?q=overlord+2018+wikipedia&oq=over&aqs=chrome.0.69i59l3j46l2j69i61j69i60l2.912j0j7&sourceid=chrome&ie=UTF-8";
    axios.get(s)
      .then(res => {
        console.log(res)
      })



    }


    render() {





        return (
            <div>
                HI
            </div>
        )
    }
}

export default wiki
