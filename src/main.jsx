import React from 'react'
import ReactDOM from 'react-dom/client'

console.log('Starting minimal React app...')

function App() {
  return React.createElement('div', {
    style: { 
      padding: '40px', 
      minHeight: '100vh',
      backgroundColor: '#333',
      color: '#fff',
      fontSize: '18px',
      fontFamily: 'Arial, sans-serif'
    }
  }, 
    React.createElement('h1', {
      style: { color: '#4CAF50', fontSize: '32px', marginBottom: '20px' }
    }, '🎉 REACT IS WORKING! 🎉'),
    React.createElement('p', {
      style: { marginBottom: '20px', lineHeight: '1.5' }
    }, 'Success! React app is now loading properly on GitHub Pages.'),
    React.createElement('button', {
      onClick: () => alert('Button works!'),
      style: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer'
      }
    }, 'Test Button - Click Me!')
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App))
)
