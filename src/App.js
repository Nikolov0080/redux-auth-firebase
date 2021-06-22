// import { useEffect, useState } from 'react'
import PageLayout from './components/PageLayout';
import LoginRegisterSwitch from './components/utils/LoginRegisterSwitch';


function App() {

  return (
    <div className="App">
      <PageLayout>
        <LoginRegisterSwitch />
      </PageLayout>
    </div>
  );
}

export default App;