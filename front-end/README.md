# MusiXtore

**English** | [Español](README.es.md)

MusiXtore is a React music-store project being adapted to work with a back-end API. It uses Vite for local development and production builds.

This project was developed as part of the EBAC Front-End Developer program. The application interface is in Spanish.

[Live demo](https://urtunes.web.app)

## Features

- Search for songs by artist using TheAudioDB.
- Browse results with album artwork, song titles, artists, albums, and track durations.
- Open a dedicated song detail page and return to the main view.
- Add songs to a personal library, prevent duplicate entries, and remove saved songs.
- Restore the library from browser `localStorage` when the application loads.
- Display loading, empty, and error states, with retry actions for failed requests.
- Use a responsive dark interface with warm accents and distinct layouts for search results and saved songs.
- Navigate controls with accessible labels and visible keyboard focus indicators.

## Tech Stack

| Area | Tools |
| --- | --- |
| User interface | React, styled-components |
| State management | Redux Toolkit, React Redux |
| HTTP requests | Axios |
| Development and build | Vite |

## Getting Started

You need Node.js and npm installed on your computer.

```bash
git clone <your-repository-url>
cd MusiXtore
npm ci
npm run dev
```

Open the address printed by Vite in your browser, normally [http://localhost:5173](http://localhost:5173).

## Usage

1. Enter an artist's name in the search field and select the search icon.
2. Browse the returned songs and select **Agregar a mi biblioteca** to save a song.
3. Select the three-dot button on a search result to open its detail page.
4. Use the back arrow to return to the main view.
5. Remove a saved song using the **×** button on its library card.

The saved library is stored under the `biblioteca-musical` key in `localStorage`. It belongs to the current browser and site address. Search results are kept in memory, while saved songs persist between visits.

Music metadata and artwork come from [TheAudioDB](https://www.theaudiodb.com/). Available information depends on the API response.

## Production Build

```bash
npm run build
```

The production files are generated in the `dist/` directory.

## Project Structure

```text
index.html          Vite HTML entry point
src/
  api/              HTTP client for the back-end API
  components/       Application and store components
  redux/            Application state slices
  App.jsx           Root component
  main.jsx          Vite application entry point
```

## Author

**Yael Aguilar**

- [GitHub](https://github.com/Y4E1-png)
- [LinkedIn](https://www.linkedin.com/in/dyael-aguilar)
