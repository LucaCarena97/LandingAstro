export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqList {
  id: string;
  faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
  main: {
    id: "main",
    faqs: [
      {
        question:
          "¿Reciclado Rosario ofrece cartuchos compatibles con todas las marcas?",
        answer:
          "Sí, contamos con cartuchos diseñados para ser compatibles con las marcas más populares del mercado, garantizando calidad y rendimiento.",
      },
      {
        question:
          "¿Cómo puedo elegir la impresora adecuada para mis necesidades?",
        answer:
          "Nuestro equipo te puede asesorar para encontrar la impresora perfecta según tu uso, desde tareas domésticas hasta proyectos profesionales.",
      },
      {
        question: "¿Reciclado Rosario tiene productos sostenibles?",
        answer:
          "Definitivamente. Ofrecemos opciones de cartuchos reciclables y técnicas de impresión ecoamigables para cuidar el medio ambiente.",
      },
      {
        question: "¿Puedo obtener asistencia técnica para mis impresoras?",
        answer:
          "Por supuesto. Nuestro servicio de soporte técnico está disponible para ayudarte con cualquier problema o consulta relacionada con impresoras y cartuchos.",
      },
      {
        question: "¿Con qué frecuencia actualizan su catálogo de productos?",
        answer:
          "Actualizamos regularmente nuestro catálogo para incluir las últimas tecnologías en impresión, asegurando siempre productos de alta calidad.",
      },
    ],
  },
};
