"use client";
import { SessionProvider } from "next-auth/react"

const SProvider = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default SProvider