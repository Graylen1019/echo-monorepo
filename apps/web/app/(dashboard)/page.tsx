"use client"

//Back-end
import { api } from "@workspace/backend/_generated/api";

//Auth
import {
  useMutation,
  useQuery,
} from "convex/react"


//Front-end
//UI
import { Button } from "@workspace/ui/components/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <h1 className="text-2xl font-bold">Hello Apps /Web</h1>
        <UserButton />
        <OrganizationSwitcher hidePersonal />
        <Button
          onClick={() => addUser()}
        >
          Add
        </Button>
        <div className="max-w-sm w-full mx-auto">
          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </>
  )
}
