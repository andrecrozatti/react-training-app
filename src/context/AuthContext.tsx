/* eslint-disable camelcase */
import React, { createContext, useCallback, useState, useContext } from 'react'


import { login } from '../../api/api'

import { ILogin, IUser } from '../types'

interface SignInCredencials {
  email: string
  password: string
}

interface IUserResponseProps {
  user: IUser
}

interface AuthContextData {
  user: IUser
  token: string
  signIn(credentials: SignInCredencials): Promise<IUserResponseProps | null>
  signOut(): void
  updateUser(user: IUser): void
}

interface AuthProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [data, setData] = useState<ILogin>(() => {
    const payload = localStorage.getItem("BlogAPI")

    if (payload) {
      const parsedPayload = JSON.parse(payload)

      const { token, user } = parsedPayload

      return { token, user }
    }

    return {} as ILogin
  })

  const signIn = useCallback(async ({ email, password }: SignInCredencials) => {
    const { data } = await login(email, password)

    localStorage.setItem("BlogAPI", JSON.stringify(data))

    setData(data)

    return data
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem("BlogAPI")

    setData({} as ILogin)
  }, [])

  const updateUser = useCallback(
    (user: IUser) => {
      localStorage.setItem(
        "BlogAPI",
        JSON.stringify({
          token: data.token,
          user,
        }),
      )
      setData({
        token: data.token,
        user,
      })
    },
    [data.token],
  )

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
