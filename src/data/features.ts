import {
  Zap,
  Shield,
  Heart,
  Coffee,
  Smile,
  Type,
  TabletSmartphone,
  CodeXml,
} from "lucide-astro";

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureList {
  id: string;
  features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
  main: {
    id: "main",
    features: [
      {
        icon: Type,
        title: "Impresión de Alta Calidad",
        description:
          "Ofrecemos impresoras confiables que garantizan resultados profesionales en cada página.",
      },
      {
        icon: Type,
        title: "Cartuchos Eficientes",
        description:
          "Cartuchos de larga duración que aseguran un desempeño económico y sostenible.",
      },
      {
        icon: Type,
        title: "Enfoque Sostenible",
        description:
          "Soluciones respetuosas con el medio ambiente, reduciendo residuos sin comprometer la calidad.",
      },
      {
        icon: Type,
        title: "Fácil Compatibilidad",
        description:
          "Cartuchos y accesorios compatibles con las principales marcas del mercado.",
      },
      {
        icon: Type,
        title: "Soporte Experto",
        description:
          "Nuestro equipo te asesora para que encuentres la solución perfecta de impresión.",
      },
      {
        icon: Type,
        title: "Precios Competitivos",
        description:
          "Ofrecemos productos de calidad superior a precios accesibles.",
      },
    ],
  },
  secondary: {
    id: "secondary",
    features: [
      {
        icon: Heart,
        title: "Made with Love",
        description: "Crafted with attention to detail",
      },
      {
        icon: Coffee,
        title: "Always Fresh",
        description: "Regular updates and improvements",
      },
      {
        icon: Smile,
        title: "User Friendly",
        description: "Intuitive and easy to use",
      },
    ],
  },
};
