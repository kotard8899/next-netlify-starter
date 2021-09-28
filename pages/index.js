import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

function Home({ data, query }) {
  return (
    <div className="container">
      {data.data[0].address}
      {query && Object.keys(query).map((k, i) => <div key={i}>{query[k]}</div>)}
    </div>
  )
}

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const res = await fetch(`https://api.artion.io/info/getcollections`)
  const data = await res.json()
  // console.log(query)
  // Pass data to the page via props
  return { props: { data, query } }
}

export default Home