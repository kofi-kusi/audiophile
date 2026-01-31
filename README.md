# Frontend Mentor - Audiophile e-commerce website

This is a solution to [Frontend Mentor's Audiophile guru challenge](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx)

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Stack](#stack)
  - [Prerequisites](#prerequisites)
  - [Local setup](#local-setup)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Author](#author)

## Overview

### The Challenge

Your users should be able to:

- [x] Add/Remove products from the cart
- [x] Edit product quantities in the cart
- [x] Fill in all fields in the checkout
- [x] Receive form validations if fields are missed or incorrect during checkout
- [x] See correct checkout totals depending on the products in the cart
- [x] Shipping always adds $50 to the order
- [x] VAT is calculated as 20% of the product total, excluding shipping
- [x] See an order confirmation modal after checking out with an order summary
- [x] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [ ] Bonus: Keep track of what's in the cart, even after refreshing the browser (localStorage could be used for this if you're not building out a full-stack app)

### stack

#### backend

Followed clean architecture principles.

- fastapi: for implementing a RESTful backend api
- PostgreSQL: for a relational database
- pycopg: db driver
- fastapi-mail: for sending mails using google's smtp server
- alembic: for database migrations
- sqlmodel: for database modelling
- pydantic: for data validations and data models
- pwdlib: used with argon2 algorithm for password hashing and verification
- itsdangerous: generating url safe tokens
- pyjwt: for generating access tokens for a `password flow` authentication and authorization
- uv: package manager

#### frontend

Component based architecture

- react
- react router v7 (data mode)
- tailwindcss
- react-toastify
- react-hook-form
- vite

### Prerequisites

To run this project locally you’ll need:

- **Git**

Frontend:

- **Node.js** (recommended: v20+)
- **npm** (comes with Node)

Backend (optional for the UI, required if you want the API/auth/email flows):

- **Python** (recommended: 3.11+)
- **PostgreSQL** (recommended: 15+)
- **Redis** (recommended: 7+)

Optional tools:

- **uv** (fast Python package manager; the backend also works with plain `pip`)

### Local setup

#### Frontend (Vite + React)

```bash
cd frontend

# install dependencies
npm i

# start dev server
npm run dev
```

Open `http://localhost:5173`.

#### Backend (FastAPI)

1. Start Postgres + Redis

```bash
# Check if Postgres port is listening
ss -lt | grep postgres

# Redis
sudo systemctl start redis-server
```

1. Configure environment variables

Create `backend/.env` with at least the following keys (values depend on your local setup):

```bash
POSTGRES_SERVER=localhost
POSTGRES_PORT=5432
POSTGRES_DB=audiophile
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your-password

REDIS_HOST=localhost
REDIS_PORT=6379

JWT_SECRET=change_me
JWT_ALGORITHM=HS256

MAIL_USERNAME=change_me
MAIL_PASSWORD=change_me
MAIL_FROM=change_me
MAIL_PORT=587
MAIL_SERVER=smtp.gmail.com
MAIL_FROM_NAME="Audiophile Shop"
```

Note: mail settings are required at startup because settings are loaded on import; you can use dummy values if you’re not testing email locally.

1. Install backend dependencies + run migrations

```bash
cd backend

# create & activate a virtualenv
uv venv
source .venv/bin/activate

# install dependencies
uv pip install -r requirements.txt

# run DB migrations
alembic upgrade head
```

1. Start the API

```bash
cd backend
source .venv/bin/activate
fastapi dev
```

API docs: `http://localhost:8000/docs`

### Screenshot

![Preview](./preview.png)

### Links

Live demo URL: [Audiophile shop](https://audiophile-ivory-five.vercel.app/)

## Author

[@kofi-kusi](https://github.com/kofi-kusi)
