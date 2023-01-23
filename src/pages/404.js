import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/SEO";

const Error = () => {
  return (
    <Layout>
    <SEO title="Error" />
      <main className='error-page'>
        <h1>404 Error</h1>
        <p>Well thats embrassing :/</p>
      </main>
    </Layout>
  )
}

export default Error