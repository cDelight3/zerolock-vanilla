# ZeroLock - Seguridad Moderna para Servidores

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-stable-green.svg)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)

**ZeroLock** es una plataforma de seguridad integral diseñada para el hardening inteligente, monitoreo en tiempo real y respuesta automatizada ante incidentes en infraestructuras de servidores. Este repositorio contiene la versión "Vanilla" (sin frameworks) del sitio web de presentación y captación de clientes.

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Uso](#-instalación-y-uso)
- [Despliegue](#-despliegue)
- [Autor](#-autor)

---

## 🚀 Descripción

El sitio web de ZeroLock sirve como punto de entrada para clientes potenciales, ofreciendo información detallada sobre los servicios de seguridad, capacidades técnicas y casos de éxito. Está construido con un enfoque en el rendimiento y la accesibilidad, utilizando tecnologías web estándar para asegurar la máxima compatibilidad y velocidad de carga.

El diseño refleja la naturaleza robusta y moderna del producto, con un esquema de colores oscuro ("dark mode") y una interfaz limpia y profesional.

---

## ✨ Características

- **Diseño Responsivo:** Adaptable a dispositivos móviles, tablets y escritorio.
- **Sistema de Modales:** Implementación propia en JavaScript para ventanas emergentes (Roadmap, Solicitud de Demo) con gestión de foco para accesibilidad (a11y).
- **Formularios Interactivos:** Validación y manejo de envío de formularios en el cliente.
- **Micro-interacciones:** Efectos de hover y transiciones suaves para mejorar la experiencia de usuario.
- **SEO Friendly:** Estructura semántica HTML5 y metaetiquetas optimizadas.
- **Sin Dependencias:** No requiere librerías externas ni frameworks pesados.

---

## 🛠 Tecnologías Utilizadas

Este proyecto se ha desarrollado siguiendo los estándares web modernos:

- **HTML5:** Estructura semántica y accesible.
- **CSS3:** Estilos personalizados, variables CSS (Custom Properties) y Flexbox/Grid para el layout.
- **JavaScript (ES6+):** Lógica del lado del cliente para interactividad (modales, formularios, año dinámico).

---

## 📂 Estructura del Proyecto

```text
zerolock-vanilla/
├── css/
│   └── main.css       # Estilos principales del sitio
├── js/
│   └── app.js         # Lógica de la aplicación (modales, formularios)
├── index.html         # Página principal (Landing Page)
└── README.md          # Documentación del proyecto
```

---

## 💻 Instalación y Uso

Al ser un proyecto estático, no requiere un proceso de compilación complejo.

### Requisitos Previos
- Un navegador web moderno (Chrome, Firefox, Edge, Safari).
- (Opcional) Un servidor local para desarrollo (ej. Live Server en VS Code, Python SimpleHTTPServer).

### Ejecución Local

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/zerolock-vanilla.git
    cd zerolock-vanilla
    ```

2.  **Abrir el proyecto:**
    - **Opción A (Directa):** Haz doble clic en el archivo `index.html` para abrirlo en tu navegador.
    - **Opción B (Servidor Local - Recomendado):** Si usas VS Code, instala la extensión "Live Server" y haz clic en "Go Live". O usa python:
      ```bash
      python -m http.server 8000
      ```
      Luego ve a `http://localhost:8000`.

---

## 📦 Despliegue

Este proyecto está listo para ser desplegado en cualquier servicio de hosting estático como:

- GitHub Pages
- Vercel
- Netlify
- AWS S3 + CloudFront

Simplemente sube los archivos del repositorio a la carpeta pública de tu servidor web.

---

## 👤 Autor

**ZeroLock Team**
- Web: [zerolock.cynetec.xyz](https://zerolock.cynetec.xyz/)
- Contacto: [hello@zerolock.io](mailto:hello@zerolock.io)
- Soporte: [support@zerolock.cynetec.xyz](mailto:support@zerolock.cynetec.xyz)
- GitHub: [zerolock-vanilla](https://github.com/zerolock-vanilla)
- Desarrollado por: [Emerson Yrene Herrera]

&copy; 2025 ZeroLock. Todos los derechos reservados.
