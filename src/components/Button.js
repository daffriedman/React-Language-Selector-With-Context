import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class Button extends React.Component{
    //Only needed for a context type
//   static contextType = LanguageContext;
  
    render(){
         //Only needed for a context type
        // const text = this.context === 'english'? 'Submit': 'שלח';
        return(
            <ColorContext.Consumer>
            {
                (color)=>

            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value)=> value.language==='english'? 'Submit':'שלח' }
                </LanguageContext.Consumer>
            </button>
            }

            </ColorContext.Consumer>
        )
        
    }
}

export default Button;