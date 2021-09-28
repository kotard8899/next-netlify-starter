import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

function Home({ data }) {
  return (
    <div className="container">
      {data.data[0].address}
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.artion.io/info/getcollections`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home