"use client"

//Back-end
import { api } from "@workspace/backend/_generated/api";

  //Auth
  import {
    useMutation,
    useQuery,
    Authenticated,
    Unauthenticated
  } from "convex/react"

  import {
    SignInButton,
    UserButton
  } from '@clerk/nextjs'

//Front-end
  //UI
  import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <h1 className="text-2xl font-bold">Hello Apps /Web</h1>
          <UserButton />
          <Button
            onClick={() => addUser()}
          >
            Add
          </Button>
          <div className="max-w-sm w-full mx-auto">
            {JSON.stringify(users, null, 2)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="h-screen flex flex-col w-full max-w-sm mx-auto justify-center items-center">
          <p className="text-bold text-4xl">Must be Signed In!</p>
          <SignInButton>Sign in!</SignInButton>
        </div>
      </Unauthenticated>
    </>
  )
}
