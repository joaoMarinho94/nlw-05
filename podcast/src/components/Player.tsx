import React from 'react'

import { Container } from '../styles/components/Player'

export const Player: React.FC = () => {
  return (
    <Container>
      <header>
        <img src="/playing.svg" alt="tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className="empty-player">
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className="empty">
        <div className="progress">
          <span>00:00</span>
          <div className="slider">
            <div className="empty-slider" />
          </div>
          <span>00:00</span>

          <div className="buttons">
            <button type="button">
              <img src="/shuffle.svg" alt="embaralhar" />
            </button>
            <button type="button">
              <img src="/play-previous.svg" alt="tocar anterior" />
            </button>
            <button type="button" className="play-button">
              <img src="/play.svg" alt="tocar" />
            </button>
            <button type="button">
              <img src="/play-next.svg" alt="tocar proxima" />
            </button>
            <button type="button">
              <img src="/repeat.svg" alt="repetir" />
            </button>
          </div>
        </div>
      </footer>
    </Container>
  )
}
