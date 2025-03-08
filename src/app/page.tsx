
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="¡Deja de lidiar con vendedores de humo, Webeo te da la verdad!"
              subheadline="En Webeo, no vendemos humo. Ofrecemos un aprendizaje real y significativo para niños de secundaria. Comprende y domina todos los temas que parecen difíciles con nuestros servicios de tutoría efectivos y sin rodeos."
              cta1="¡No esperes más, empieza a aprender de verdad con Webeo ahora!"
              cta2="Haz clic aquí para desafiar tus conocimientos y superar tus desafíos académicos con Webeo."
            />

            <How
              step1Title="Escoge tu [Service]"
              step1Desc="Navega por nuestros [services] y selecciona el que más te guste. ¡No vendemos humo!"
              step2Title="Personaliza tu Experiencia"
              step2Desc="Adapta el [service] a tus necesidades de aprendizaje. Dile adiós a no saber na!"
              step3Title="Disfruta y Aprende"
              step3Desc="Sumérgete en el mundo del webeo y descubre un nuevo estilo de aprendizaje. ¡Ideal para [targetAudience]!"
            />

            <Aboutus
              headline="Acerca de nosotros"
              subheadline="Descripción"
              beneficio1="Beneficio 1"
              beneficio2="Descripción beneficio 1"
              beneficiotitulo1="Beneficio 2"
              beneficiotitulo2="Descripción beneficio 2"
            />

            <Services
              heading="Impulsa Tu Potencial de Aprendizaje con Nuestra Amplia Gama de Servicios Educativos"
              description="En [companyName], reconocemos el desafío de no saber na que enfrentan muchos jóvenes. Pero no vendemos humo, ofrecemos soluciones educativas sólidas y efectivas para ayudar a los niños de secundaria a superar sus obstáculos académicos."
              services={[{"name":"Tutoría Personalizada","icon":"🎓","description":"Clases individuales adaptadas a tus necesidades y ritmo de aprendizaje."},{"name":"Talleres de Habilidades de Estudio","icon":"📚","description":"Aprende técnicas de estudio efectivas para optimizar tu tiempo."},{"name":"Asesoramiento en Tareas","icon":"✏️","description":"Obtén ayuda experta para completar tus tareas y proyectos escolares."},{"name":"Cursos de Refuerzo","icon":"🔬","description":"Fortalece tus conocimientos en las materias que más te cuestan."},{"name":"Preparación para Exámenes","icon":"🎯","description":"Prepárate para tus exámenes con confianza y seguridad."}]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[]}
            />

            <BookAppointment
              heading="Únete a la lucha contra la ignorancia con Webeo"
              description="En Webeo, nos preocupamos por la educación de los jóvenes y queremos ayudarles a diferenciar la realidad de las falsas promesas. No más vendedores de humo. Con nuestros servicios, los jóvenes aprenderán a discernir la verdad y a tomar decisiones informadas."
            />
<Footer />
    </main>
  );
}
    