import React  from 'react';
import './Button.scss'

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
        var dup = [];
       var l = persons.length;
       var i=0;
        for(i=0;i< l;i++)
        {
            var sa = persons[i]["magnetLink"];
            if(dup.includes(sa))
            continue;
            else
            dup.push(sa);
           
            var s1 = persons[i]["doc"];
            var s4 = persons[i]["seeder"];
            var s5 = "btn btn-primary btn-lg btn-block";
            var s6 = "sd";
            

            if(s4>50)
            {
                s5 = "path0";
            }
            else
            if(s4>10)
            {
                s5 ="path1";
            }
            else
            if(s4<10)
            {
                s5 = "path2";
            }

            var s2 ="";
            var doc = new DOMParser().parseFromString(s1, "text/html");
            var a =doc.getElementsByTagName('a');
            var d = doc.getElementsByTagName('font')[0].innerText;
            outer:
            for(var as=0;as<a.length;as++)
            {
             
              if(a[as].className =="detLink")
              {
              s2 = a[as].innerHTML;
              break outer;
              }
            }
         
            if(s2.includes('2160'))
            {
              s6 = '4k';
            }
            else
            {
              if(s2.includes('1080'))
              {
                s6 = '1080p';
              }
              else
              {
                if(s2.includes('720'))
                {
                  s6 = '720p';

                }
                else
                continue;
              }
              




            }
        
            d =d.substring(d.indexOf(',')+1);
            d = d.substring(0,d.indexOf(','));
           // var s1 = decodeURI(s.substring(s.indexOf('&dn=')+4).substring(0,s.indexOf(';')));
           // eslint-disable-next-line
           console.log(sa);
            this.state.final.push(
              <a href = {sa}>
<button class="cta" data-toggle="tooltip" title={s2} >
  <svg 
  xmlns="http://www.w3.org/2000/svg"
	width="300px" height="85px" 
	viewBox="0 0 460 85"
  >
		<path
		class={s5}
		d="M444.781,9.368H15.218c-2.716,0-4.918,2.238-4.918,4.999v57.266c0,2.761,2.202,4.999,4.918,4.999h429.563
			c2.717,0,4.918-2.238,4.918-4.999V14.367C449.699,11.606,447.498,9.368,444.781,9.368z"/>
  </svg>
  <span class="cta-copy"><img src={require(`../svg/${s6}.png`)} height="30px" width="30px"/> {d} </span>
</button>
</a>
                
                
                )
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