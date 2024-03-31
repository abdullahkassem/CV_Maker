import Content from './components/content.jsx'
import Header from './components/header.jsx'
import { EditContext } from './components/EditContext.jsx'
import { useContext,useState } from 'react'

function App() {
  const [edit,setEdit] = useState('1');
  return (
    <div>
      
      <EditContext.Provider value={{edit,setEdit}}>
        <Header editState={{edit,setEdit}} />
        <Content />
      </EditContext.Provider>
    </div>
  )
}

export default App
