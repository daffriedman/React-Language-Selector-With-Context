import React from 'react';
import Context from '../contexts/LanguageContext';
class LanguageSelector extends React.Component{
    static contextType = Context;
    render(){
        console.log(this.context);
        return(
            <div>
            Select a language
            <i className="flag us" onClick={()=> this.context.onLanguageChange('english')}/>
            <i className="flag il" onClick={()=> this.context.onLanguageChange('hebrew')}/>
        </div>
        )
    }
}

export default LanguageSelector;