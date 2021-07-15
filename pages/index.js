// NextJS
import Head from 'next/head'
import { useRouter } from 'next/router'

// firebase
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../app/firebaseApp'

// Styles
import styles from '../styles/Home.module.css'

export default function Home() {
  const [user, loading, error] = useAuthState(auth)
  const router = useRouter()

  if (loading) return <h1>Loading...</h1>
  else if (error) return <h1>Error: {error.message}</h1>

  else if (user) {
    // code here
    return (
      <div className={styles.container}>
        <Head>
          <title>Daily Planner</title>
        </Head>
        <div>
          <h1>Daily Planner</h1>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>
    )
  }

  // none matched, user not logged in, redirect to login
  router.push('/login')
  return <h1>Redirecting...</h1>
}
