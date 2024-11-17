import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PageMetaData } from '../components/patterns/PageMetaData'

export default function Login(): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    // Automatically "log in" the user
    const fakeUserId = 'alex' // Replace with your hardcoded user ID
    localStorage.setItem('user', JSON.stringify({ id: fakeUserId }))
    
    // Redirect to the home page or another relevant dashboard
    router.push('/home') // Replace with your desired landing page
  }, [router])

  return (
    <>
      <PageMetaData
        title="Welcome to HammerRead"
        path="/login"
        ogImage="/static/images/og-homepage-03.png"
      />
      <div data-testid="login-page-tag" />
    </>
  )
}