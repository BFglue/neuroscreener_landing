import React from 'react'
import { Clock, Target, Users, Zap, BarChart, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const Benefits: React.FC = () => {
  const benefitCards = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Экономия времени",
      description: "Ускоряет процесс подбора кандидатов, позволяя сосредоточиться на общении с лучшими из них. Вместо дней ручного отбора — результаты за считанные часы."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Точность и эффективность",
      description: "ИИ анализирует и отбирает резюме с высокой степенью соответствия заданным критериям, минимизируя человеческие ошибки и предвзятость."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Улучшение качества найма",
      description: "Находит наиболее подходящих кандидатов, которые могли быть пропущены при традиционном отборе, повышая качество найма и снижая текучесть кадров."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Масштабируемость",
      description: "Легко справляется с большим объемом резюме, позволяя эффективно проводить массовый набор персонала без увеличения HR-команды."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Аналитика и отчетность",
      description: "Предоставляет структурированные данные и аналитику по кандидатам, помогая принимать обоснованные решения и оптимизировать процесс найма."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Конфиденциальность",
      description: "Обеспечивает безопасную обработку данных кандидатов в соответствии с требованиями законодательства о защите персональных данных."
    }
  ];

  return (
    <section id="benefits" className="py-20 sm:py-28 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl gradient-text">
              Преимущества использования Нейро-скринера
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-secondary-600">
              Трансформируйте процесс найма с помощью искусственного интеллекта
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefitCards.map((benefit, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)} direction={index % 2 === 0 ? 'left' : 'right'}>
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden glass"
                whileHover={{ 
                  y: -3, 
                  boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-medium text-secondary-900">{benefit.title}</h3>
                  <p className="mt-2 text-base text-secondary-700">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.8} direction="up">
          <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden glass">
            <div className="px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h3 className="text-2xl font-extrabold text-secondary-900 gradient-text">
                  Готовы повысить эффективность подбора персонала?
                </h3>
                <p className="mt-4 max-w-3xl text-lg text-secondary-600">
                  Присоединяйтесь к компаниям, которые уже оптимизировали свой процесс найма с помощью Нейро-скринера.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white gradient-bg-primary btn-3d neon-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Начать сейчас
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Benefits
