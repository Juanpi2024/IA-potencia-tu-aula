import { Product, Resource } from './types';

export const PREMIUM_MATERIALS: Product[] = [
  {
    id: 'p1',
    title: 'Kit Completo de IA para Docentes',
    price: 49.99,
    description: 'Manuales, prompts y plantillas para integrar ChatGPT y Gemini en el aula.',
    category: 'Pack',
    image: 'https://picsum.photos/id/1/600/400',
    features: ['50+ Prompts Educativos', 'Guía de Implementación', 'Plantillas Editables']
  },
  {
    id: 'p2',
    title: 'Planeación Curricular Automatizada',
    price: 29.99,
    description: 'Sistema de plantillas avanzadas para reducir tiempos de planificación en un 70%.',
    category: 'Productividad',
    image: 'https://picsum.photos/id/20/600/400',
    features: ['Excel Automatizado', 'Tutoriales en Video', 'Soporte Prioritario']
  },
  {
    id: 'p3',
    title: 'Masterclass: Evaluación con IA',
    price: 39.99,
    description: 'Curso intensivo sobre cómo crear rúbricas y evaluar trabajos usando inteligencia artificial.',
    category: 'Cursos',
    image: 'https://picsum.photos/id/3/600/400',
    features: ['3 Horas de Video', 'Certificado Digital', 'Acceso de por vida']
  },
  {
    id: 'p4',
    title: 'Pack de Rúbricas Universales',
    price: 19.99,
    description: 'Colección de 20 rúbricas adaptables para cualquier nivel educativo.',
    category: 'Recursos',
    image: 'https://picsum.photos/id/24/600/400',
    features: ['Formatos Word/PDF', 'Escalas Editables', 'Ejemplos Reales']
  },
  {
    id: 'p5',
    title: 'Gamificación en el Aula Digital',
    price: 24.99,
    description: 'Estrategias y recursos para gamificar tus clases presenciales y virtuales.',
    category: 'Metodología',
    image: 'https://picsum.photos/id/5/600/400',
    features: ['Tableros Digitales', 'Sistema de Badges', 'Guía paso a paso']
  },
  {
    id: 'p6',
    title: 'Asesoría Personalizada 1:1',
    price: 79.99,
    description: 'Una hora de consultoría privada para adaptar herramientas digitales a tu contexto.',
    category: 'Servicios',
    image: 'https://picsum.photos/id/6/600/400',
    features: ['Videollamada Zoom', 'Grabación de Sesión', 'Plan de Acción']
  }
];

export const FREE_RESOURCES: Resource[] = [
  {
    id: 'r1',
    title: 'Guía de Inicio Rápido: Prompt Engineering',
    category: 'Guías',
    description: 'Aprende a estructurar tus instrucciones para obtener mejores resultados de la IA.',
    downloadUrl: '#',
    date: '2023-10-15'
  },
  {
    id: 'r2',
    title: 'Plantilla de Plan de Clase Semanal',
    category: 'Plantillas',
    description: 'Formato limpio y eficiente para organizar tus semanas lectivas.',
    downloadUrl: '#',
    date: '2023-10-20'
  },
  {
    id: 'r3',
    title: 'Rúbrica de Debate en Clase',
    category: 'Rúbricas',
    description: 'Criterios claros para evaluar la participación oral y argumentación.',
    downloadUrl: '#',
    date: '2023-11-01'
  },
  {
    id: 'r4',
    title: 'Lista de Herramientas IA Gratuitas',
    category: 'Guías',
    description: 'Curaduría de las mejores herramientas gratuitas para docentes en 2024.',
    downloadUrl: '#',
    date: '2023-11-05'
  },
  {
    id: 'r5',
    title: 'Checklist para Clases Híbridas',
    category: 'Talleres',
    description: 'No olvides nada antes de iniciar tu sesión mixta presencial/virtual.',
    downloadUrl: '#',
    date: '2023-11-12'
  },
  {
    id: 'r6',
    title: 'Formato de Feedback para Alumnos',
    category: 'Plantillas',
    description: 'Estructura para dar retroalimentación constructiva y rápida.',
    downloadUrl: '#',
    date: '2023-11-18'
  },
  {
    id: 'r7',
    title: 'Infografía: Taxonomía de Bloom Digital',
    category: 'Guías',
    description: 'Adaptación de los verbos de Bloom para la era digital.',
    downloadUrl: '#',
    date: '2023-11-25'
  },
  {
    id: 'r8',
    title: 'Matriz de Evaluación de Proyectos',
    category: 'Rúbricas',
    description: 'Herramienta completa para evaluar ABP (Aprendizaje Basado en Proyectos).',
    downloadUrl: '#',
    date: '2023-12-01'
  },
  {
    id: 'r9',
    title: 'Dinámicas Rompehielo Virtuales',
    category: 'Talleres',
    description: '5 actividades rápidas para conectar con tus alumnos en Zoom/Meet.',
    downloadUrl: '#',
    date: '2023-12-10'
  },
  {
    id: 'r10',
    title: 'Calendario Escolar 2024 Editable',
    category: 'Plantillas',
    description: 'Organizador anual con fechas importantes y espacios para notas.',
    downloadUrl: '#',
    date: '2024-01-05'
  }
];
