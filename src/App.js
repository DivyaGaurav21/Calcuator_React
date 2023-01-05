import React from 'react';
import './App.css';
import CalsUi from './Components/CalsUi'

// here App component is parent component of all component 
function App() {

  return (
    <div className='App'>
          <div className="calculator-body">
              {/* calsUI component kept all functanality of calculator project  */}
            <CalsUi/>
           </div>
    </div>
  );
}

export default App;
