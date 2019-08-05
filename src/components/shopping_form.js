import React from 'react'
import { useSelector } from 'react-redux'

export default props => {
  const greeting = useSelector(appState => appState.greeting)

  return (
    <h1>Shopping Cart:{greeting}</h1>
  )
}