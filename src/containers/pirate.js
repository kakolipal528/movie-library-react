import React from 'react';
import $ from 'jquery'

import axios from 'axios';




class Pirate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             
            final : []
        };
      }
   
  


  componentDidMount() {
    var s = "https://cors-anywhere.herokuapp.com/https://morning-wave-44976.herokuapp.com/?val="+encodeURI(this.props.title);
    axios.get(s)
      .then(res => {
          console.log(res)
        const persons = JSON.parse(JSON.stringify(res.data));
       var l = persons.length;
       var i=0;
        for(i=0;i< l;i++)
        {
            var s = persons[i]["magnetLink"];
            var s1 = persons[i]["doc"];
            var s2 ="";
            var doc = new DOMParser().parseFromString(s1, "text/html");
            var a =doc.getElementsByTagName('a');
            var d = doc.getElementsByTagName('font')[0].innerText;
            outer:
            for(var as=0;as<a.length;as++)
            {
              console.log(a[as].className);
              if(a[as].className =="detLink")
              {
              s2 = a[as].innerHTML;
              break outer;
              }
            }
        











           // var s1 = decodeURI(s.substring(s.indexOf('&dn=')+4).substring(0,s.indexOf(';')));
           // eslint-disable-next-line
            this.state.final.push(<li><button class = "btn btn-primary btn-lg btn-block" style={{whiteSpace: "normal",overflowWrap : "break-word",overflow : "visible", height :"100px"}} onClick={()=> window.open(s, "_blank")}><h2>{s2+"\n"+d}</h2></button><br></br></li>)
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