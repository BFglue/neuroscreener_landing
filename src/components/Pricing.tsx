import React from 'react'
import { Check } from 'lucide-react'

const Pricing: React.FC = () => {
  const plans = [
    {
      id: 'basic',
      name: 'Базовый',
      price: '29 900',
      description: 'Идеально для малого бизнеса и стартапов',
      features: [
        'До 100 резюме в месяц',
        'Базовый анализ резюме',
        'Поиск по ключевым навыкам',
        'Экспорт результатов в Excel',
        'Email-поддержка'
      ],
      cta: 'Выбрать план',
      popular: false
    },
    {
      id: 'pro',
      name: 'Профессиональный',
      price: '59 900',
      description: 'Оптимальное решение для растущих компаний',
      features: [
        'До 500 резюме в месяц',
        'Расширенный анализ резюме',
        'Поиск по ключевым навыкам и опыту',
        'Ранжирование кандидатов по релевантности',
        'Интеграция с популярными HR-системами',
        'Приоритетная поддержка по email и телефону'
      ],
      cta: 'Выбрать план',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Корпоративный',
      price: 'По запросу',
      description: 'Для крупных компаний с большим объемом найма',
      features: [
        'Неограниченное количество резюме',
        'Полный анализ резюме и сопроводительных писем',
        'Настраиваемые критерии поиска',
        'Интеграция с любыми HR-системами',
        'Персональный менеджер',
        'Круглосуточная поддержка',
        'Обучение команды'
      ],
      cta: 'Связаться с нами',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Тарифные планы
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-secondary-600">
            Выберите оптимальный план для вашего бизнеса
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg border ${
                plan.popular ? 'border-primary-500 ring-2 ring-primary-500' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary-500 text-white text-center py-2 font-medium">
                  Самый популярный
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-900">{plan.name}</h3>
                <p className="mt-2 text-secondary-600">{plan.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-secondary-900">{plan.price}</span>
                    <span className="ml-1 text-xl font-medium text-secondary-500">₽/мес</span>
                  </div>
                </div>
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-primary-500" />
                      </div>
                      <p className="ml-3 text-base text-secondary-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                      plan.popular
                        ? 'text-white bg-primary-600 hover:bg-primary-700'
                        : 'text-primary-700 bg-primary-100 hover:bg-primary-200'
                    } transition-colors`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h3 className="text-2xl font-bold text-secondary-900 text-center">Часто задаваемые вопросы</h3>
            
            <div className="mt-8 space-y-6">
              <div>
                <h4 className="text-lg font-medium text-secondary-900">Как начать использовать Нейро-скринер?</h4>
                <p className="mt-2 text-base text-secondary-700">
                  Выберите подходящий тарифный план и оставьте заявку. Наш менеджер свяжется с вами в течение 24 часов для настройки доступа и проведения демонстрации.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-secondary-900">Можно ли изменить тарифный план?</h4>
                <p className="mt-2 text-base text-secondary-700">
                  Да, вы можете изменить тарифный план в любое время. При переходе на более высокий тариф изменения вступят в силу немедленно, при переходе на более низкий — с начала следующего расчетного периода.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-secondary-900">Есть ли пробный период?</h4>
                <p className="mt-2 text-base text-secondary-700">
                  Да, мы предоставляем бесплатный пробный период на 14 дней для оценки возможностей системы. Для получения доступа оставьте заявку на демонстрацию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
