import React from 'react'
import { Star } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Елена Смирнова',
      role: 'HR-директор, ООО "ТехноПрогресс"',
      content: 'Нейро-скринер полностью изменил наш подход к подбору персонала. Мы сократили время на первичный отбор кандидатов на 70% и значительно повысили качество найма. Теперь мы можем сосредоточиться на работе с лучшими кандидатами, а не тратить время на просмотр сотен резюме.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 2,
      name: 'Алексей Петров',
      role: 'Руководитель отдела рекрутинга, "ИнноваТех"',
      content: 'С помощью Нейро-скринера мы смогли обработать более 500 резюме за неделю при поиске специалистов для нового проекта. Система точно определила 15 идеальных кандидатов, 10 из которых мы в итоге приняли на работу. Это невероятный результат!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 3,
      name: 'Мария Иванова',
      role: 'HR-менеджер, "ФинансГрупп"',
      content: 'Раньше на обработку 100 резюме у нас уходило около недели. С Нейро-скринером мы делаем это за один день. Система не только экономит время, но и находит действительно подходящих кандидатов, учитывая все нюансы требований к вакансии.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Что говорят наши клиенты
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-secondary-600">
            Узнайте, как Нейро-скринер помогает компаниям оптимизировать процесс найма
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-secondary-900">{testimonial.name}</h3>
                    <p className="text-sm text-secondary-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-base text-secondary-700 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 border border-primary-200 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            Более 100 компаний уже используют Нейро-скринер
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex justify-center">
                <div className="h-8 w-32 bg-gray-200 rounded opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
