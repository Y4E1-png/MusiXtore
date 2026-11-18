# MusiXtore

**English** · [Español](README.es.md)

MusiXtore is a project that connects a React music store to a Django REST API. Browse and search the catalog, add songs to the cart, register a test user, and place an order. Sign-in and payment are simulated. Registration and orders are stored in PostgreSQL.

| Folder | What it contains |
| --- | --- |
| [front-end/](front-end/) | React, Vite, Redux Toolkit, and Axios |
| [back-end/](back-end/) | Django REST Framework, PostgreSQL, and Docker Compose |

## Run the backend

Start Docker Desktop. From the repository root, run:

```bash
cd back-end
cp -n .env.example .env
```

In `back-end/.env`, set these values. The first is the port exposed on your computer, and the second is the port Django listens on inside Docker.

```dotenv
DOCKER_WEB_PORT_FORWARD=8001
PORT=8000
```

Then, from `back-end/`, run:

```bash
docker compose up --build -d web postgres redis
docker compose exec web python manage.py migrate
```

Open the [songs endpoint](http://localhost:8001/api/songs/) to check that Django responds. If the catalog is empty, add a sample song using the browsable API form.

## Run the frontend

In a second terminal, from the repository root, run:

```bash
cd front-end
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The frontend sends requests to `http://localhost:8001/api`. Run `npm run build` from `front-end/` to generate the production build in `dist/`.

## Try the checkout

1. Add a song to the cart and continue to checkout.
2. Enter fictitious payment details and review the order.
3. Confirm the purchase. After Django saves the order, the confirmation page shows the purchased songs and the cart is cleared.

Use fictitious data when testing registration and checkout.
