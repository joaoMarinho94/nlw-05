import React from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Container } from '../styles/components/Header'

export const Header: React.FC = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })

  return (
    <Container>
      <img src="/logo.svg" alt="podcast" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </Container>
  )
}
