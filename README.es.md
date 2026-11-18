# MusiXtore

[English](README.md) · **Español**

MusiXtore es un pryecto que conecta una tienda musical en React con una API REST en Django. Explora y filtra el catálogo, agrega canciones al carrito, registra un usuario de prueba y realiza un pedido. El inicio de sesión y el pago son simulados. El registro y los pedidos se guardan en PostgreSQL.

| Carpeta | Qué contiene |
| --- | --- |
| [front-end/](front-end/) | React, Vite, Redux Toolkit y Axios |
| [back-end/](back-end/) | Django REST Framework, PostgreSQL y Docker Compose |

## Levantar el backend

Abre Docker Desktop. Desde la raíz del repositorio, ejecuta:

```bash
cd back-end
cp -n .env.example .env
```

En `back-end/.env`, configura estos valores. El primero es el puerto expuesto en tu computadora y el segundo es el puerto donde escucha Django dentro de Docker.

```dotenv
DOCKER_WEB_PORT_FORWARD=8001
PORT=8000
```

Después, desde `back-end/`, ejecuta:

```bash
docker compose up --build -d web postgres redis
docker compose exec web python manage.py migrate
```

Abre la [API de canciones](http://localhost:8001/api/songs/) para comprobar que Django responde. Si el catálogo está vacío, agrega una canción de ejemplo desde el formulario de la API navegable.

## Levantar el frontend

En otra terminal, desde la raíz del repositorio, ejecuta:

```bash
cd front-end
npm ci
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173). El frontend envía las peticiones a `http://localhost:8001/api`. Ejecuta `npm run build` desde `front-end/` para generar la compilación de producción en `dist/`.

## Probar el checkout

1. Agrega una canción al carrito y continúa al pago.
2. Escribe datos de pago ficticios y revisa el pedido.
3. Confirma la compra. Una vez que Django guarda el pedido, la pantalla final muestra las canciones compradas y se vacía el carrito.

Usa datos ficticios al probar el registro y el checkout.
