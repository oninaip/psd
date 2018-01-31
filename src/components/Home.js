import React from 'react';
import panel from "../img/panel.png";
import panel2 from "../img/panel2.png";
import panel3 from "../img/panel3.png";
const olList=[
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Facilisis in pretium nisl aliquet',
    'Nulla volutpat aliquam velit',
    'Faucibus porta lacus fringilla vel',
    'Aenean sit amet erat nunc'

]

const table=[
    { number:1,
      text: "Lorem ipsum",
      about: "Consectetur adipiscing elit",
      who: "Consectetur adipiscing",
      language:"Lorem ipsum"
    },
    { number:2,
      text: "Modul caram",
      about: "Remation vore undocost",
      who: "Remation vore undocost",
      language:"Modul caram"
    },
    { number:3,
      text: "Victorian mor",
      about: "Untable via costario more",
      who: "Untable via costario more",
      language:"Victorian mor"
    },
     { number:4,
      text: "Jacon van dor",
      about: "Executive live anothre vy",
      who: "Executive live anothre",
      language:"Jacon van dor"
    },
    { number:5,
      text: "Inpuction mian",
      about: "Nastiro macon puratece",
      who: "Nastiro macon puratece",
      language:"Inpuction mian"
    },
    { number:6,
      text: "Povatior naron",
      about: "Gover nate foracent pore",
      who: "Gover nate foracent",
      language:"Povatior naron"
    },
    { number:7,
      text: "Inbug for cars",
      about: "Overview cal the montre",
      who: "Overview cal the montre",
      language:"Inbug for cars",
     languageClass:'borderRightBt',
      numberClass:"borderLeftBt"
    } 
]

export class Home extends React.Component {
    render(){
        let ul="<ul>";
        let unstyled="<ul classs=”unstyled”>";
        let ol="<ol>";
        return (
            <div className="content1">
                <div className="content2">
                    <div className="content_a">
                        <h2>What We Do…</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in <a href="#">reprehenderit in voluptate velit esse</a> cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="content_b">
                        <div className="panel">
                            <a href="#"><h3>Admin panel</h3><img src={panel} /></a>
                        </div>
                        <div className="panel">
                            <a href="#"><h3>Shortcodes</h3><img src={panel2}/></a>
                        </div>
                        <div className="panel">
                            <a href="#"><h3>Videos</h3><img src={panel3}/></a>
                        </div>
                    </div>
                    <div><h2>Lists</h2></div>
                    <div className="content_c">
                        <div className="listsUl">
                            <ul>
                                <li className="p">List style type circle <span className="greyBg">{ul}</span></li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit
                                    <ul>
                                        <li>Phasellus iaculis neque</li>
                                        <li>Purus sodales ultricies</li>
                                        <li>Vestibulum laoreet porttitor </li>
                                    </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Aenean sit amet erat nunc</li>

                            </ul>
                            
                        </div>
                        <div className="listsUn">
                            <ul className='unstyled'>
                                <li className="p">Unstyled <span className="greyBg">{unstyled}</span></li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit
                                    <ul>
                                        <li>Phasellus iaculis neque</li>
                                        <li>Purus sodales ultricies</li>
                                        <li>Vestibulum laoreet porttitor </li>
                                    </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Aenean sit amet erat nunc</li>

                            </ul>

                            
                        </div>
                        <div className="listsOl">
                              <ol start="0">
                                <li className="p">Ordered <span className="greyBg">{ol}</span></li>
                                {olList.map((ol,id)=>{
                                    return <li key={id}>{ol}</li>
                                    })}

                            </ol>
                        </div>
                    </div>
                    <div className="content_d">
                        <h2>Table</h2>
                        <table>
                            <tbody>
                               
                                <tr>
                                    <th className="leftBorder">&#8470;</th>
                                    <th>Toranton rate</th>
                                    <th>Puranocak var berond</th>
                                    <th>Intime modular to cavan</th>
                                    <th className="rightBorder">Language</th>
                                </tr>
                                {table.map((tab)=>{
                                    return(
                                        <tr key={tab.number}>
                                            <td className={tab.numberClass}>{tab.number}</td>
                                            <td>{tab.text}</td>
                                            <td>{tab.about}</td>
                                            <td>{tab.who}</td>
                                            <td className={tab.languageClass}><a href="#">{tab.language}</a></td>
                                        </tr> )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}