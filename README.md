# ProShop

- Experience the live App [Here](https://proshop-faze.vercel.app/): Explore the live e-commerce platform and test its features.
- A full-stack e-commerce web application that allows users to browse products, add them to a cart, and securely place orders. The platform includes key features such as user authentication, admin dashboards, order management, and payment processing.
- Built with React for the frontend, Redux for state management, Node.js and Express for the backend, and MongoDB as the database. The app integrates PayPal for payment processing and leverages the latest React features like hooks and functional components.
- The application supports user roles (admin and customer), dynamic product listing, real-time order updates, and is designed to be easily deployable and scalable for real-world use cases.
- Experience the Backend [Here](https://proshop-ecommerce-01vy.onrender.com/): Interact with the API and see how the backend processes requests in real time.

![screenshot](https://github.com/bradtraversy/proshop_mern/blob/master/uploads/Screen%20Shot%202020-09-29%20at%205.50.52%20PM.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Environment Variables

Create an .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```
- Then for backend = go back to root and inside backend

```
cd ..
cd backend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm start

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
