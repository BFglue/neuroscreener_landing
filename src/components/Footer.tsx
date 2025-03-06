import React from 'react'
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold text-white">НейроСкринер</span>
            </div>
            <p className="mt-4 text-secondary-300">
              Инновационное решение для автоматизации подбора персонала с использованием искусственного интеллекта.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <a href="tel:+79827201777" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  +7-982-720-17-77
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <a href="mailto:info@neuroscreen.ru" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  info@neuroscreen.ru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-secondary-300">
                  г. Москва, ул. Инновационная, 42
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Подписка на новости</h3>
            <p className="text-secondary-300 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости и обновления
            </p>
            <form className="mt-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-900"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400">
              © {new Date().getFullYear()} НейроСкринер. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
