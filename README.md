---

# Gallery Art Website

[[License](https://img.shields.io/badge/license-MIT-green)](LICENSE)  
A visually stunning gallery art website showcasing curated artwork with descriptions and meaningful context. Built using **Next.js**, **Tailwind CSS**, **Framer Motion**, **Node.js (Express)**, and **MongoDB**, this project highlights design and development skills with a focus on UI/UX.

## 🚀 Features
- **Horizontal Scrolling**: Sleek horizontal navigation for a unique browsing experience.
- **Dynamic Art Display**: Integrated with the Art Institute of Chicago API to fetch and display artwork with details.
- **Minimalist Design**: Black-and-white color scheme for an elegant visual aesthetic.
- **Interactive Navigation**: Left navigation bar for seamless exploration.
- **Dynamic Routing**: Dedicated pages for each artwork with detailed descriptions.
- **Animations**: Framer Motion animations for smooth transitions and interactive elements.

---

## 🛠️ Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Backend**: [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **API Integration**: [Art Institute of Chicago API](https://api.artic.edu/docs/)

---

## 📦 Installation

### Clone the Repository
```bash
git clone https://github.com/JeanEudes-dev/gallery-art.git
cd gallery-art
```

### Install Dependencies
```bash
npm install
```

### Configure Environment Variables
Create a `.env.local` file in the root directory with the following:
```env
NEXT_PUBLIC_API_BASE_URL=https://api.artic.edu/api/v1
```

### Run the Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to view the app.

---

## 📄 Project Structure
```
gallery-art/
├── src/
│   ├── pages/          # Next.js page components
│   ├── components/     # Reusable UI components
│   ├── styles/         # Tailwind CSS configurations
│   ├── lib/            # API and utility functions
├── public/             # Static assets
├── .env.local          # Environment variables
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── next.config.js      # Next.js configuration
```

---

## 🌐 Deployment
This project is designed to be deployed as a static website for showcasing purposes.  
### Deployment Steps
1. Build and export the project:
   ```bash
   npm run build
   npm run export
   ```
2. Deploy the `out` directory to **GitHub Pages** or another static hosting platform.

---

## 🤝 Contributions
Contributions, issues, and feature requests are welcome!  
Feel free to check out the [issues page](https://github.com/JeanEudes-dev/gallery-art/issues).

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 🖼️ Showcase
Stay tuned for live previews and updates!

---

## 📧 Contact
For inquiries, reach out via:
- **GitHub**: [JeanEudes-dev](https://github.com/JeanEudes-dev)
- **Email**: eudesmails@gmail.com
```
---
