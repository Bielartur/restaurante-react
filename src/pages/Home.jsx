import React, { useContext } from 'react'
import { Button } from '../components/ui/Button'
import { UserContext } from '../context/UserContext'

export function Home() {
  const { handleLogOut } = useContext(UserContext)

  return (
    <>
        <h1>Página da home</h1>
        <p>Login bem sucedido</p>
        <Button onClick={handleLogOut}>
          Sair da conta
        </Button>
    </>
  )
}
