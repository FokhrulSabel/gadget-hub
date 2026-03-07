# 🚀 GadgetHub

**GadgetHub** is a modern gadget marketplace built with **Next.js 15**, **MongoDB**, and **NextAuth**.
It provides a clean SaaS-style UI where users can explore products, manage gadgets from a dashboard, and enjoy a fast and responsive experience.

---

## ✨ Features

* 🛍️ **Product Catalog** – Browse gadgets with search and pagination
* 🔐 **Authentication** – Secure login & registration using NextAuth
* 📊 **User Dashboard** – Manage products with an intuitive interface
* ➕ **Add Products** – Authenticated users can add gadgets
* 🛠️ **Manage Products** – Update or remove products from the dashboard
* 🔎 **Real-time Search** – Find gadgets instantly
* 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop
* 🎨 **Modern UI** – Glassmorphism, gradients, and smooth animations
* ⚡ **Serverless API Routes** – Fast backend with Next.js API

---

## 🧰 Tech Stack

| Technology                  | Purpose                    |
| --------------------------- | -------------------------- |
| **Next.js 15 (App Router)** | Full-stack React framework |
| **React**                   | UI components              |
| **Tailwind CSS**            | Styling                    |
| **NextAuth.js**             | Authentication             |
| **MongoDB**                 | Database                   |
| **Lucide React**            | Modern icons               |
| **Vercel**                  | Deployment                 |

---

## 📂 Project Structure

```
GadgetHub
│
├── app
│   ├── api
│   │   └── products
│   │
│   ├── dashboard
│   │   ├── add-product
│   │   └── manage-products
│   │
│   ├── products
│   ├── login
│   ├── register
│   └── about
│
├── components
│   ├── ui
│   │   ├── Button.jsx
│   │   ├── Dropdown.jsx
│   │   └── Logo.jsx
│   │
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── lib
│   └── mongodb.js
│
└── public
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/gadgethub.git
cd gadgethub
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

---


## 🌐 Live Demo

```
https://gadget-hub-green-eight.vercel.app/
```

---

## 🚀 Deployment

The easiest way to deploy is with **Vercel**.

```
npm run build
```

Then deploy:

```
vercel
```

---

## 👨‍💻 Author

**Your Name**

* GitHub: https://github.com/FokhrulSabel
* https://www.linkedin.com/in/fokhrulsabel/

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you like this project, consider giving it a **star** on GitHub!

