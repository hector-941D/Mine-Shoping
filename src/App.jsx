import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Text} from './components/atoms/Text'

function App() {

  return (
    <>
      <Text variant="h1" className="text-center">MineShop</Text>
      <Text variant="h2" className="text-center">Todo lo necesario para tu supervivencia</Text>
    </>
  )
}

export default App