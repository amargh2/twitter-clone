import { useSession, signIn, signOut } from "next-auth/react"
export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    console.log(session)
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => session ? signOut(): signIn('google')}>Sign in with Google</button>
    </>
  )
}