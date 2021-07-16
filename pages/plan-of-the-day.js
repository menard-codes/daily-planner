// react
import React from 'react'

// firebase
import { auth, firestore } from '../app/firebaseApp'

// next js
import Link from 'next/link'

// components
import Navbar from '../components/elements/Navbar'

// styles
import styles from '../styles/Home.module.css'


// TODO: Get Latest one. (this has a bug)
export default function PlanOfTheDay({ data }) {
    console.log(data)
    if (data) {
        // we're fine
        return (
            <div>
                <Navbar>
                    <button onClick={() => auth.signOut()} className={styles.signOutBtn}>Sign Out</button>
                    <Link href="/">
                        <a style={{textDecoration: 'underline 3px rgb(84, 84, 84)', marginLeft: '40px', fontSize: '1rem'}}>Set Goal</a>
                    </Link>
                </Navbar>
                <h1 style={{marginTop: '40px'}}>Plan of the Day</h1>
                <p style={{fontSize: '1.7rem', marginLeft: '40px'}}>{ data.dayDesc }</p>
                <h1>Todo List</h1>
                <ul style={{fontSize: '1.7rem', marginLeft: '40px'}}>
                    {
                        data.todoList.map((todo, i) => (
                            <li key={i}>{todo}</li>
                            ))
                    }
                </ul>
            </div>
        )
    } else {
        // no goals yet
        return (
            <>
                <Navbar>
                    <button onClick={() => auth.signOut()} className={styles.signOutBtn}>Sign Out</button>
                    <Link href="/">
                        <a style={{textDecoration: 'underline 3px rgb(84, 84, 84)', marginLeft: '40px', fontSize: '1rem'}}>Set Goal</a>
                    </Link>
                </Navbar>
                <h1>Nuthin...</h1>
            </>
        )
    }
}

export async function getServerSideProps(ctx) {
    const getLatest = async () => {
        const querySnapshot = await firestore.collection('DailyPlan').orderBy('timeAdded', 'desc').limit(1).get()
        const docs = querySnapshot.docs
        const data = docs.map(data => data.data())
        return data[0]
    }
    const data = await getLatest()
    if (!data) return {props: {data: ''}}
    delete data.timeAdded
    return {props: {data}}
}


