import React from 'react'
import { BrainCircuit, Clock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 animated-bg">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80')] bg-cover opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-teal rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <AnimatedSection>
              <h1 className="text-4xl font-extrabold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl">
                <span className="block">Революция в</span>
                <span className="block gradient-text">подборе персонала</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-xl text-secondary-700 max-w-3xl">
                Нейро-скринер — инновационный инструмент, использующий искусственный интеллект для быстрого и эффективного подбора персонала. Обработайте и проанализируйте 100 резюме за 50 минут.
              </p>
            </AnimatedSection>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedSection delay={0.2}>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white gradient-bg-primary btn-3d neon-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Запросить демо
                </motion.a>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <motion.a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Узнать больше
                </motion.a>
              </AnimatedSection>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <AnimatedSection delay={0.4} direction="left">
                <div className="flex items-start glass p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-600 text-white">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-secondary-900">Искусственный интеллект</h3>
                    <p className="mt-1 text-sm text-secondary-700">Умный анализ резюме с использованием передовых алгоритмов ИИ</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5} direction="left">
                <div className="flex items-start glass p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-600 text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-secondary-900">Экономия времени</h3>
                    <p className="mt-1 text-sm text-secondary-700">100 резюме за 50 минут вместо нескольких дней ручного отбора</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.6} direction="left">
                <div className="flex items-start glass p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-600 text-white">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-secondary-900">Точный подбор</h3>
                    <p className="mt-1 text-sm text-secondary-700">Находит кандидатов, максимально соответствующих вашим требованиям</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <AnimatedSection delay={0.3} direction="right">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden shine"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              >
                <div className="px-6 py-8 sm:p-10 gradient-bg-accent text-white">
                  <h3 className="text-2xl font-semibold">Ускорьте процесс найма</h3>
                  <p className="mt-2 text-primary-100">Сосредоточьтесь на общении с лучшими кандидатами, а не на просмотре сотен резюме</p>
                </div>
                <div className="px-6 py-8 sm:p-10 bg-white">
                  <ul className="space-y-4">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary-500" />
                      </div>
                      <p className="ml-3 text-base text-secondary-700">Умный отбор кандидатов по заданным критериям</p>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary-500" />
                      </div>
                      <p className="ml-3 text-base text-secondary-700">Анализ и группировка подходящих вариантов</p>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary-500" />
                      </div>
                      <p className="ml-3 text-base text-secondary-700">Наглядная таблица результатов с прямыми ссылками</p>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary-500" />
                      </div>
                      <p className="ml-3 text-base text-secondary-700">Интеллектуальное уточнение поисковых запросов</p>
                    </motion.li>
                  </ul>
                  <div className="mt-8">
                    <motion.a
                      href="#pricing"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white gradient-bg-primary btn-3d"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Выбрать тариф
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
