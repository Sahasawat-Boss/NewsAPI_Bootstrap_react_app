import React, { useState } from 'react'
import Nav from './components/Nav'
// import TestBS from './components/TestBS'
import NewsBoard from './components/NewsBoard'


const App = () => {
  const [category,setCategory] = useState("General");

  return (
    <div>
      <Nav setCategory={setCategory}/>
      <NewsBoard category={category}/>
      {/* <TestBS /> */}
    </div>
  )
}

export default App