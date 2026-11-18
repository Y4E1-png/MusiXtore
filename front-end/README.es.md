# MusiXtore

[English](README.md) | **Español**

MusiXtore es un proyecto de tienda musical en React que se está adaptando para conectarse a una API de back-end. Usa Vite para el desarrollo local y la compilación de producción.

Este proyecto se desarrolló como parte del programa de Programador Front-End de EBAC. La interfaz de la aplicación está en español.

[Demo en línea](https://urtunes.web.app)

## Funcionalidades

- Busca canciones por artista mediante TheAudioDB.
- Muestra resultados con la portada del álbum, el título de la canción, el artista, el álbum y la duración.
- Permite abrir una página de detalles de la canción y regresar a la vista principal.
- Agrega canciones a una biblioteca personal, evita duplicados y permite eliminar canciones guardadas.
- Recupera la biblioteca desde el `localStorage` del navegador cuando se inicia la aplicación.
- Presenta estados de carga, vacíos y de error, con opciones para reintentar las solicitudes fallidas.
- Ofrece una interfaz adaptable con tema oscuro, acentos cálidos y diseños diferentes para los resultados de búsqueda y las canciones guardadas.
- Incluye controles con etiquetas accesibles e indicadores visibles de foco al navegar con el teclado.

## Tecnologías

| Área | Herramientas |
| --- | --- |
| Interfaz de usuario | React, styled-components |
| Gestión del estado | Redux Toolkit, React Redux |
| Solicitudes HTTP | Axios |
| Desarrollo y compilación | Vite |

## Instalación y ejecución

Necesitas tener Node.js y npm instalados en tu computadora.

```bash
git clone <url-de-tu-repositorio>
cd MusiXtore
npm ci
npm run dev
```

Abre en el navegador la dirección que indique Vite, normalmente [http://localhost:5173](http://localhost:5173).

## Uso

1. Escribe el nombre de un artista en el campo de búsqueda y selecciona el icono de lupa.
2. Explora las canciones y selecciona **Agregar a mi biblioteca** para guardar una canción.
3. Selecciona el botón de tres puntos de un resultado para abrir su página de detalles.
4. Usa la flecha de regreso para volver a la vista principal.
5. Elimina una canción guardada mediante el botón **×** de su tarjeta en la biblioteca.

La biblioteca se guarda bajo la clave `biblioteca-musical` en `localStorage`. Pertenece al navegador y a la dirección del sitio que se están utilizando. Los resultados de búsqueda se mantienen en memoria, mientras que las canciones guardadas se conservan entre visitas.

Los datos musicales y las portadas provienen de [TheAudioDB](https://www.theaudiodb.com/). La información disponible depende de la respuesta de la API.

## Compilación para producción

```bash
npm run build
```

Los archivos de producción se generan en el directorio `dist/`.

## Estructura del proyecto

```text
index.html          Punto de entrada HTML de Vite
src/
  api/              Cliente HTTP para la API del back-end
  components/       Componentes de la aplicación y de la tienda
  redux/            Estados de la aplicación
  App.jsx           Componente raíz
  main.jsx          Punto de entrada de Vite
```

## Autor

**Yael Aguilar**

- [GitHub](https://github.com/Y4E1-png)
- [LinkedIn](https://www.linkedin.com/in/dyael-aguilar)
