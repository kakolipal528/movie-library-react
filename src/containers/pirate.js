import React from 'react';
import {Link} from 'react-router-dom'

import axios from 'axios';
import Button from 'react-bootstrap/Button'



class Pirate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             
            final : []
        };
      }
   
  


  componentDidMount() {
    
    axios.get(`https://cors-anywhere.herokuapp.com/https://morning-wave-44976.herokuapp.com/?val=the%20dark%20knight`)
      .then(res => {
          console.log(res)
        const persons = JSON.parse(JSON.stringify(res.data));
       var l = persons.length;
       var i=0;
        for(i=0;i< l;i++)
        {
            var s = persons[i]["magnetLink"];
            var s1 = s.substring(s.indexOf('&dn=')+4).substring(0,s.indexOf(';'));
           
            this.state.final.push(<li><Button onClick={()=> window.open(s, "_blank")}>{s1+" "+persons[i]["seeder"]+"    "+persons[i]["size"]}</Button></li>)
            this.setState({
               final: this.state.final
              });
            
        }

      })
  }

  render() {
    return (
      <ul>
        
         {this.state.final}
      </ul>
    )
  }
}

export default Pirate