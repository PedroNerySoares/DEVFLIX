import React from 'react'

function ButtonLink(props){
    //props => {ClassName : "o que alguem passa", href:/""}
    return(
        <a  href={props.href} className={props.className}>
           {props.childrem}
        </a>
        
    );
}

export default ButtonLink;