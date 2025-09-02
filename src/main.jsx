import React from 'react'
import ReactDOM from 'react-dom/client'

console.log('Starting minimal React app...')

function App() {
  return React.createElement('div', {
    style: { padding: '20px', color: 'white', backgroundColor: 'black' }
  }, 
    React.createElement('h1', null, 'MINIMAL REACT TEST'),
    React.createElement('p', null, 'If you see this, React works!'),
    React.createElement('button', {
      onClick: () => console.log('Button clicked!')
    }, 'Click me')
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(App())
