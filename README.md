# Frontend Mentor - Audiophile e-commerce website 

This is a solution to [Frontend Mentor's Audiophile guru challenge](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx)

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Stack](#stack)
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
- pyjwt: for generating access tokens for a `password flow` authentication and  authorization
- uv: package manager

### frontend

Component based architecture

- react
- react router v7 (data mode)
- tailwindcss
- react-toastify
- react-hook-form
- vite

### Screenshot

![Preview](./preview.png)

### Links

Live demo URL: [Audiophile shop](https://audiophile-ivory-five.vercel.app/)

## Author

[@kofi-kusi](https://github.com/kofi-kusi)
