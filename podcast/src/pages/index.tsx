import React from 'react'

const Index: React.FC = () => {
  return <div />
}

export default Index

export async function getStaticProps(): Promise<any> {
  const response = await fetch('http://localhost:3333/episodes')
  const data = response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8
  }
}
