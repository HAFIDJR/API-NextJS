# 🌟 Next.js RESTful API with MongoDB

**🚀 A modern, scalable RESTful API built with Next.js and MongoDB, deployed on Vercel**

## 🔥 Features

- **Blazing Fast** - Built with Next.js API routes for optimal performance
- **MongoDB Powered** - Robust database solution for your data needs
- **Vercel Deployed** - Serverless functions with instant global scaling
- **TypeScript Ready** - Fully typed for better developer experience
- **JWT Authentication** - Secure endpoints with JSON Web Tokens
- **RESTful Standards** - Follows best practices for API design
- 
## 🌍 API Endpoints
### Posts Endpoints

| Method | Endpoint               | Description                              | Required Headers            |
|--------|------------------------|------------------------------------------|-----------------------------|
| `GET`    | `/api/posts`           | Get all posts with pagination           | `none`                      |
| `POST`   | `/api/posts`           | Create new post                         | `Authorization: Bearer <token>` |
| `GET`    | `/api/posts/:id`       | Get single post by ID                   | `none`                      |
| `PUT`    | `/api/posts/:id`       | Update existing post                    | `Authorization: Bearer <token>` |
| `DELETE` | `/api/posts/:id`       | Delete post                             |



## 📦 Quick Start
```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev


