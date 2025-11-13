import React, { useContext } from 'react'
import { Button } from '../components/Button'
import { UserContext } from '../context/UserContext'

export function Home() {
  const { handleLogOut } = useContext(UserContext)

  return (
    <div>
        <h1>Página da home</h1>
        <p>Login bem sucedido</p>
        <Button onClick={handleLogOut}>
          Sair da conta
        </Button>
    </div>
  )
}
