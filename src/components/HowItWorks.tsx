import React from 'react'
import { Search, Filter, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-100 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl gradient-text">
              Как работает Нейро-скринер
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-secondary-600">
              Три простых шага к эффективному подбору персонала с помощью искусственного интеллекта
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <AnimatedSection delay={0.1} direction="up">
              <motion.div 
                className="relative glass p-6 rounded-xl"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="absolute -top-5 left-5 flex items-center justify-center h-12 w-12 rounded-full gradient-bg-primary text-white neon-glow">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="relative pt-6 pl-4">
                  <div className="flex items-center mb-4">
                    <div>
                      <Search className="h-8 w-8 text-primary-600 mr-2" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900">Определение поискового запроса</h3>
                  </div>
                  <p className="text-base text-secondary-700">
                    Вы задаёте название вакансии, необходимые навыки и другие критерии идеального кандидата. Искусственный интеллект анализирует запрос и предлагает дополнительные параметры для учёта, обеспечивая максимально точный и эффективный поиск резюме.
                  </p>
                  <div className="mt-6 bg-primary-50 rounded-lg p-4 border border-primary-100">
                    <h4 className="font-medium text-primary-800">Преимущество:</h4>
                    <p className="mt-1 text-sm text-secondary-700">
                      ИИ помогает уточнить критерии поиска, которые вы могли не учесть, повышая точность результатов.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="up">
              <motion.div 
                className="mt-10 lg:mt-0 relative glass p-6 rounded-xl"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="absolute -top-5 left-5 flex items-center justify-center h-12 w-12 rounded-full gradient-bg-primary text-white neon-glow">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="relative pt-6 pl-4">
                  <div className="flex items-center mb-4">
                    <div>
                      <Filter className="h-8 w-8 text-primary-600 mr-2" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900">Умный отбор кандидатов</h3>
                  </div>
                  <p className="text-base text-secondary-700">
                    ИИ подбирает резюме, точно соответствующие запросу, анализирует и группирует подходящие варианты, формируя топ лучших кандидатов. Система учитывает не только ключевые слова, но и контекст, опыт и релевантность навыков.
                  </p>
                  <div className="mt-6 bg-primary-50 rounded-lg p-4 border border-primary-100">
                    <h4 className="font-medium text-primary-800">Преимущество:</h4>
                    <p className="mt-1 text-sm text-secondary-700">
                      Алгоритм понимает контекст и находит скрытые соответствия, которые могут быть пропущены при ручном отборе.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="up">
              <motion.div 
                className="mt-10 lg:mt-0 relative glass p-6 rounded-xl"
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="absolute -top-5 left-5 flex items-center justify-center h-12 w-12 rounded-full gradient-bg-primary text-white neon-glow">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="relative pt-6 pl-4">
                  <div className="flex items-center mb-4">
                    <div>
                      <FileText className="h-8 w-8 text-primary-600 mr-2" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900">Предоставление результатов</h3>
                  </div>
                  <p className="text-base text-secondary-700">
                    Нейро-скринер оформляет информацию по каждому резюме в наглядную таблицу, показывая, какие резюме полностью соответствуют критериям, а какие — частично. Вы получаете прямые ссылки на резюме для приглашения кандидатов.
                  </p>
                  <div className="mt-6 bg-primary-50 rounded-lg p-4 border border-primary-100">
                    <h4 className="font-medium text-primary-800">Преимущество:</h4>
                    <p className="mt-1 text-sm text-secondary-700">
                      Структурированные результаты позволяют быстро принимать решения и сразу связываться с подходящими кандидатами.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <motion.span 
              className="px-6 py-3 bg-white text-lg font-medium text-secondary-900 rounded-full shadow-sm neon-glow"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              Результат: 100 резюме за 50 минут
            </motion.span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <AnimatedSection delay={0.4}>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white gradient-bg-primary btn-3d neon-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Запросить демонстрацию
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
