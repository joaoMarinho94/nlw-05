import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../services/api'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'
import { Container } from '../../styles/pages/episode'

interface Episode {
  id: string
  title: string
  thumbnail: string
  description: string
  members: string
  duration: number
  durationAsString: string
  url: string
  publishedAt: string
}

interface EpisodePros {
  episode: Episode
}

const Index: React.FC = ({ episode }: EpisodePros) => {
  return (
    <Container>
      <div className="thumbnail-container">
        <Link href="/">
          <button type="button">
            <img src="/arrow-left.svg" alt="Voltar" />
          </button>
        </Link>
        <Image
          width={700}
          height={160}
          src={episode.thumbnail}
          objectFit="cover"
        />
        <button type="button">
          <img src="/play.svg" alt="Tocar episódio" />
        </button>
      </div>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>

      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </Container>
  )
}

export default Index

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params

  const { data } = await api.get(`/episodes/${id}`)

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url
  }

  return {
    props: { episode },
    revalidate: 60 * 60 * 24
  }
}
