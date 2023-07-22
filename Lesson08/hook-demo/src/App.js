import React from 'react'
import DemoUseState from './components/DemoUseState'
import DemoUseStateObject from './components/DemoUseStateObject'
import DemoTask from './components/DemoTask'
import DemoUseEffect from './components/DemoUseEffect'

export default function App() {
  return (
    <div className='container border border-primary my-5'>
        <h1 className='text-center'>Hook Demo</h1>
        <hr/>
        <DemoUseState />
        <DemoUseStateObject />

        <DemoTask />
        <hr/>
        <DemoUseEffect />
    </div>
  )
}
