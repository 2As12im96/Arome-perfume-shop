# Arome Perfume Shop - E-commerce Frontend

![Project Sketch](images/pc.png)

---

## 🌟 Project Overview

**Arome Perfume Shop** is a sophisticated and modern e-commerce platform specializing in a wide array of exquisite fragrances for both men and women. Built with a focus on delivering an intuitive and engaging user experience, this application serves as the beautiful frontend for a comprehensive perfume retail solution.

The project is developed using **React** with **Vite** for a fast and efficient development experience, coupled with **Redux Toolkit** for robust state management and **Styled Components** for dynamic styling.

---

## ✨ Key Features

Arome Perfume Shop offers a rich set of features designed to enhance the online shopping journey and streamline administrative tasks:

* **🛒 Shopping Cart Functionality:** Seamlessly add, update, and remove items from the cart.
* **❤️ Wishlist Management:** Users can save their favorite perfumes for future purchases.
* **📄 Multi-static Pages:** Comprehensive navigation across various static pages (e.g., About Us, Contact, FAQs).
* **🔌 API Integration:** Robust integration with backend APIs for dynamic data fetching and customized functionalities.
* **🔐 User Authentication:** Secure user registration and login system.
* **🌐 Google Sign-In:** Convenient authentication using Firebase for Google accounts.
* **📱 Responsive Design:** A fully responsive user interface ensuring an optimal viewing experience across all devices (desktops, tablets, mobile phones).
* **💳 Stripe Payment Integration:** Secure and seamless payment processing powered by Stripe.
* **🔍 Product Detail Pages:** Dedicated pages for each product, showcasing detailed descriptions, images, and user reviews.
* **📊 Admin Dashboard:** A powerful administrative interface for managing the e-commerce store:
    * **Overview:** A glance at key store metrics.
    * **Products Management:** Full CRUD (Create, Read, Update, Delete) operations for managing product inventory.
    * **Orders Management:** View order details and update order statuses.
    * **Users Management:** Full CRUD (Create, Read, Update, Delete) operations for managing user accounts.

---

## 🛠️ Technologies & Libraries

This project leverages a modern stack to deliver a high-performance and maintainable application:

### Core Technologies:
* **React:** A declarative, efficient, and flexible JavaScript library for building user interfaces.
* **Vite:** A next-generation frontend tooling that provides an incredibly fast development experience.
* **Redux Toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.
* **Styled Components:** Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps.
* **Bootstrap:** A powerful, feature-packed frontend toolkit for building responsive, mobile-first sites.
* **Material-UI:** A comprehensive suite of UI tools built on top of React for faster and easier web development.

### Key Libraries & Packages:
* **Axios:** Promise-based HTTP client for the browser and Node.js.
* **React Router DOM:** Declarative routing for React.
* **Firebase:** Google's mobile and web application development platform for Google Sign-In.
* **JWT-Decode:** A small library to decode JWTs.
* **React-Toastify:** A highly customizable React notification library.
* **Slick Carousel / React-Slick:** A powerful carousel component for React.
* **React Hook Form:** Performant, flexible and extensible forms with easy-to-use validation.
* **Moment.js:** A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

### Icons:
* **Font Awesome:** A popular icon toolkit.

---

## 🚀 Getting Started

Follow these steps to set up the Arome Perfume Shop frontend project locally.

### Prerequisites

Make sure you have the following installed on your machine:
* Node.js (LTS version recommended)
* npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/arome-perfume-shop-frontend.git](https://github.com/YOUR_USERNAME/arome-perfume-shop-frontend.git)
    ```
    (Replace `YOUR_USERNAME/arome-perfume-shop-frontend.git` with your actual repository URL)

2.  **Navigate into the project directory:**
    ```bash
    cd arome-perfume-shop-frontend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```

4.  **Create a `.env` file:**
    Create a file named `.env` in the root of the project directory and add your environment variables.
    ```
    # Example .env content
    VITE_API_BASE_URL=http://localhost:5000/api  # Your backend API URL
    VITE_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_STRIPE_PUBLISHABLE_KEY # Your Stripe Public Key
    VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
    ```
    * **Note:** For Vite, environment variables must be prefixed with `VITE_`.

5.  **Run the development server:**
    ```bash
    npm run dev
    # OR
    yarn dev
    ```

    The application will typically be accessible at `http://localhost:5173`.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---