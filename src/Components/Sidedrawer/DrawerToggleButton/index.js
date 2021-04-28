import React, { useEffect, useState} from 'react';


import './styles.css'

const DrawerToggleButton = props => {

    const [boxShadow, setBoxShadow] = useState({boxShadow: 'none'});
    

    

    //useEffect(() => {
    //    if (typeof window !== "undefined") {
    //        window.onscroll = () => {
    //          let currentScrollPos = window.pageYOffset;
    //          
    //          // console.log(maxScroll)
    //          if (currentScrollPos === 0) {
    //            setBoxShadow({ boxShadow: "none" })
    //             //console.log(currentScrollPos)
    //          } else {
    //           setBoxShadow({ boxShadow: "0 2px 4px 0 rgba(0,0,0,1)" })
    //          }
    //        }
    //      }
    //}, [boxShadow])

   

    return(
    
    <button className="toggle-button" onClick={props.click} style= {{boxShadow: boxShadow.boxShadow}}>
        <div className="button-line"/>
        <div className="button-line"/>
        <div className="button-line"/>
    </button>
    )};

export default DrawerToggleButton;