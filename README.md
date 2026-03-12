# AGROSIS - Sistema de Gestión Agroexportadora

Sistema de gestión frontend para empresa agroexportadora (arándano, palta, alcachofa). Construido con **Angular 21**, diseño responsive con tema claro/oscuro.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

| Software | Versión mínima | Cómo verificar |
|----------|---------------|----------------|
| **Node.js** | 22.x o superior | `node -v` |
| **npm** | 10.x o superior | `npm -v` |
| **Git** | Cualquiera | `git --version` |

### Instalación de Node.js

Si no tienes Node.js instalado:

1. Ve a [https://nodejs.org](https://nodejs.org)
2. Descarga la versión **LTS** (22.x o superior)
3. Ejecuta el instalador y sigue los pasos
4. Reinicia tu terminal después de instalar
5. Verifica con:
```bash
node -v
npm -v
```

---

## Instalación del Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/diegoECV/agrosiste.git
cd agrosiste
```

### 2. Cambiar a la rama develop

```bash
git checkout develop
```

### 3. Instalar dependencias

```bash
npm install
```

> Esto instalará Angular 21, Angular SSR y todas las dependencias necesarias. Puede tomar unos minutos.

---

## Comandos Principales

### Servidor de desarrollo

```bash
npm start
```

o también:

```bash
npx ng serve
```

Luego abre tu navegador en: **http://localhost:4200/**

La aplicación se recargará automáticamente cuando modifiques cualquier archivo.

### Compilar para producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

### Ejecutar build en modo SSR (Server-Side Rendering)

```bash
npm run build
node dist/beta-sistema/server/server.mjs
```

### Ejecutar tests

```bash
npm test
```

### Compilar en modo watch (desarrollo continuo)

```bash
npm run watch
```

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── layout/          # Layout principal (sidebar + topbar + contenido)
│   │   ├── sidebar/         # Barra lateral de navegación
│   │   ├── topbar/          # Barra superior (búsqueda, tema, perfil)
│   │   ├── stats-card/      # Tarjeta de estadísticas
│   │   ├── orders-table/    # Tabla de pedidos (dashboard)
│   │   ├── activity-panel/  # Panel de actividad reciente
│   │   └── analytics-panel/ # Panel de analítica rápida
│   ├── pages/               # Páginas de la aplicación
│   │   ├── dashboard/       # Panel principal
│   │   ├── customers/       # Gestión de clientes
│   │   ├── orders/          # Gestión de pedidos
│   │   ├── analytics/       # Analítica y gráficos
│   │   ├── messages/        # Sistema de mensajería
│   │   ├── products/        # Catálogo de productos
│   │   ├── production/      # Control de producción
│   │   ├── reports/         # Reportes e informes
│   │   ├── settings/        # Configuración del sistema
│   │   └── add-product/     # Formulario agregar producto
│   ├── services/            # Servicios (ThemeService)
│   ├── app.routes.ts        # Rutas de la aplicación
│   └── app.config.ts        # Configuración de Angular
├── styles.css               # Estilos globales y variables CSS
└── index.html               # HTML principal
```

## Rutas Disponibles

| Ruta | Página |
|------|--------|
| `/dashboard` | Panel principal |
| `/clientes` | Gestión de clientes |
| `/pedidos` | Gestión de pedidos |
| `/analitica` | Analítica y gráficos |
| `/mensajes` | Mensajería |
| `/productos` | Catálogo de productos |
| `/produccion` | Control de producción |
| `/reportes` | Reportes |
| `/configuracion` | Configuración |
| `/agregar-producto` | Formulario nuevo producto |

---

## Características

- **Angular 21** con standalone components y signals
- **Tema claro/oscuro** con persistencia en localStorage
- **Diseño responsive** (desktop, tablet, móvil)
- **Ionicons** para iconografía
- **Google Fonts** (Poppins)
- **Lazy loading** en todas las rutas
- **SSR** (Server-Side Rendering) configurado
- **Animaciones CSS** sutiles en transiciones

---

## Tecnologías

- Angular 21.2.0
- TypeScript 5.9.2
- Ionicons 7.1.0
- Google Fonts (Poppins)
- Angular SSR

---

## Solución de Problemas

### `ng` no se reconoce como comando

Usa `npx` delante:
```bash
npx ng serve
```

### Error de permisos en npm install

En Windows, ejecuta la terminal como **Administrador**.

### El puerto 4200 está ocupado

Usa otro puerto:
```bash
npx ng serve --port 4300
```

### Los iconos no cargan

Verifica que tienes conexión a internet. Los iconos se cargan desde CDN (unpkg.com).
