import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Основы веб-разработки',
      description: 'HTML, CSS, JavaScript с нуля до уверенного уровня',
      duration: '3 месяца',
      icon: 'Code2'
    },
    {
      title: 'Дизайн интерфейсов',
      description: 'UX/UI дизайн и прототипирование в Figma',
      duration: '2 месяца',
      icon: 'Palette'
    },
    {
      title: 'Аналитика данных',
      description: 'Python, SQL и визуализация данных',
      duration: '4 месяца',
      icon: 'BarChart3'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '18:00 - 20:00', course: 'Веб-разработка' },
    { day: 'Вторник', time: '19:00 - 21:00', course: 'UI/UX Дизайн' },
    { day: 'Среда', time: '18:00 - 20:00', course: 'Аналитика данных' },
    { day: 'Четверг', time: '19:00 - 21:00', course: 'Веб-разработка' },
    { day: 'Суббота', time: '11:00 - 13:00', course: 'UI/UX Дизайн' }
  ];

  const testimonials = [
    {
      name: 'Мария Иванова',
      role: 'Frontend разработчик',
      text: 'Прошла курс веб-разработки и через 2 месяца нашла работу. Преподаватели объясняют сложные вещи простым языком.',
      avatar: '👩‍💻'
    },
    {
      name: 'Алексей Петров',
      role: 'UX дизайнер',
      text: 'Качество обучения превзошло ожидания. Много практики и реальных кейсов. Рекомендую всем начинающим!',
      avatar: '👨‍🎨'
    },
    {
      name: 'Екатерина Смирнова',
      role: 'Аналитик данных',
      text: 'Курс помог систематизировать знания и освоить новые инструменты. Теперь работаю в крупной IT-компании.',
      avatar: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">EduSpace</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('schedule')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Расписание
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button>Записаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Образование для будущего
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Онлайн-курсы по программированию, дизайну и аналитике данных.
            Учитесь у профессионалов в удобное время.
          </p>
          <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
            Начать обучение
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>

        <div className="container mx-auto mt-20 grid md:grid-cols-3 gap-6 animate-scale-in">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={course.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>{course.duration}</span>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Расписание занятий
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="grid md:grid-cols-3 gap-4 p-6 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon name="Calendar" size={20} className="text-primary" />
                        <span className="font-semibold">{item.day}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="BookOpen" size={20} className="text-primary" />
                        <span>{item.course}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Отзывы студентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Свяжитесь с нами
          </h2>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите, чем мы можем помочь..." rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Mail" size={20} />
                  <span>info@eduspace.ru</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Phone" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="MapPin" size={20} />
                  <span>Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-white">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 EduSpace. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
