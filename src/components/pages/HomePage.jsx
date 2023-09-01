import React from 'react'
import { Container } from 'react-bootstrap'

export default function HomePage() {
  return (
    <div className='homepage' >
      <div className='description'>
        <img className='homePhoto' src="/images/flamimgos.jpeg" alt="" />
        <p>
          Добро пожаловать в наш зоопарк! Мы рады приветствовать вас и приглашаем вас на увлекательное путешествие в мир дикой природы. Здесь вы сможете встретиться с разнообразными животными, узнать о их удивительных особенностях и познакомиться с их неповторимым образом жизни.
          Наши квалифицированные сотрудники и заботливые волонтеры всегда готовы ответить на ваши вопросы и помочь вам сделать ваше посещение незабываемым. Мы стремимся предоставить вам самый комфортный и безопасный опыт, поэтому мы уделяем особое внимание здоровью и благополучию наших животных.
        </p>
      </div>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Контакты</h4>
            <p>Телефон: +7 123 456 789</p>
            <p>Email: elzoo@elb.com</p>
            <p>Адрес: г. Москва, ул. Примерная, д. 123</p>
          </div>
          <div className="footer-section">
            <h4>Ссылки</h4>
            <ul>
              <li><a href="/">Главная</a></li>
              <li><a href="/о-нас">О нас</a></li>
              <li><a href="/контакты">Контакты</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2022 Зоопарк. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
