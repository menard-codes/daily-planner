// react
import { useState, useEffect } from 'react'

// NextJS
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

// firebase
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore, firebase } from '../app/firebaseApp'

// Styles
import styles from '../styles/Home.module.css'

// Components
import Navbar from '../components/elements/Navbar'
import TodoListViewer from '../components/widgets/TodoListViewer'

export default function Home() {
  const [user, loading, error] = useAuthState(auth)
  const [day, setDay] = useState('')
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')
  const router = useRouter()
  const handleSave = () => {
    setDay('')
    setTodo('')
    setTodoList([])
    firestore.collection('/DailyPlan').add({
      timeAdded: firebase.firestore.Timestamp.now(),
      dayDesc: day,
      todoList
    }).then(() => router.push('/plan-of-the-day'))
  }

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
          <Navbar>
            <button onClick={() => auth.signOut()} className={styles.signOutBtn}>Sign Out</button>
            <Link href="/plan-of-the-day">
              <a style={{textDecoration: 'underline 3px rgb(84, 84, 84)', marginLeft: '40px', fontSize: '1rem'}}>Plan of the Day</a>
            </Link>
          </Navbar>
          <div style={{margin: '30px 0 100px 0'}}>
            <label  style={{fontSize: '3rem'}}>On This Day...</label>
            <textarea value={day} onChange={e=>setDay(e.target.value)} style={{display: 'block', margin: '10px 0', width: '50vw', height: '50vh', fontSize: '2rem', padding: '10px', marginBottom: '50px'}} />
            <form onSubmit={e => {
              e.preventDefault()
              setTodoList([...todoList, todo])
              setTodo('')
            }}>
              <label style={{fontSize: '3rem'}}>Todo List</label>
              <input value={todo} onChange={e => setTodo(e.target.value)} style={{display: 'block', margin: '10px 0', fontSize: '2rem', padding: '10px', width: '50vw'}} />
              <button style={{width: '50vw', padding: '10px', fontSize: '2rem', borderRadius: '10px', border: 'none', backgroundColor: '#aaa', cursor: 'pointer'}}>Add</button>
            </form>
            <TodoListViewer todos={todoList} />
            <button onClick={handleSave} style={{width: '50vw', padding: '10px', marginTop: '50px', fontSize: '2rem', borderRadius: '10px', border: 'none', backgroundColor: '#fff176', cursor: 'pointer'}}>Let&apos;s Do This!</button>
          </div>
        </div>
      </div>
    )
  }

  // none matched, user not logged in, redirect to login
  router.push('/login')
  return <h1>Redirecting...</h1>
}
