import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LangugageSelector';
class App extends React.Component {

    render(){

        return(
            <div className="ui container">
                <LanguageStore>

           <LanguageSelector onLanguageChange={this.onLanguageChange}/>
            <ColorContext.Provider value='yellow'>

          

           <UserCreate/>
            
            </ColorContext.Provider>
                </LanguageStore>
        </div>
    )
}
}

export default App;