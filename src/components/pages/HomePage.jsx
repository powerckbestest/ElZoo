import React from 'react'
import { Container } from 'react-bootstrap'

export default function HomePage() {
  return (
    <div className='homepage' >
      <div className='description'>
        <img className='homePhoto' src="/images/flamimgos.jpeg" alt="" />
      <div className='text'>
        <p>
          Добро пожаловать в наш зоопарк! Мы рады приветствовать вас и приглашаем вас на увлекательное путешествие в мир дикой природы. Здесь вы сможете встретиться с разнообразными животными, узнать о их удивительных особенностях и познакомиться с их неповторимым образом жизни.
          </p>
          <p>
          Наши квалифицированные сотрудники и заботливые волонтеры всегда готовы ответить на ваши вопросы и помочь вам сделать ваше посещение незабываемым. Мы стремимся предоставить вам самый комфортный и безопасный опыт, поэтому мы уделяем особое внимание здоровью и благополучию наших животных.
        </p>
      </div>
      </div>
    </div>
  )
}
