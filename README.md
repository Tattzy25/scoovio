# Scoovio - Peer-to-Peer Scooter Sharing Platform

A complete clone of Turo.com built with Next.js 14, TypeScript, and modern web technologies. Scoovio enables scooter owners to rent out their vehicles and travelers to find unique scooters for their trips.

## 🚀 Features

### User Features
- **Browse & Search**: Advanced filtering for scooters by location, price, features
- **Scooter Details**: Comprehensive scooter information with high-quality images
- **Booking System**: Seamless booking flow with calendar integration
- **User Dashboard**: Manage bookings, favorites, and profile
- **Reviews & Ratings**: Rate and review scooters and hosts
- **Secure Payments**: Stripe integration for safe transactions

### Host Features
- **Host Registration**: Complete onboarding for new hosts
- **Scooter Listing**: Add and manage scooter listings with photos
- **Host Dashboard**: Track earnings, bookings, and scooter performance
- **Booking Management**: Approve or decline booking requests
- **Calendar Management**: Set availability and pricing

### Technical Features
- **Modern UI/UX**: Responsive design matching Turo's aesthetic
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized images and code splitting
- **SEO Ready**: Server-side rendering and meta tags
- **Accessibility**: WCAG 2.1 compliant
- **Security**: JWT authentication and protected routes

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Headless UI
- **Authentication**: NextAuth.js
- **Database**: Prisma ORM with PostgreSQL
- **Payments**: Stripe
- **File Storage**: AWS S3
- **Email**: Nodemailer
- **Maps**: Google Maps API
- **Validation**: Zod schema validation

## 📦 Installation

### Prerequisites
- Node.js 18+
- PostgreSQL
- Stripe account
- AWS account (for S3)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd scoovio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Copy the environment template:
```bash
cp .env.local.example .env.local
```

Fill in your environment variables:
```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/scoovio"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."

# AWS S3
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_REGION="us-east-1"
AWS_S3_BUCKET="scoovio-images"

# Google Maps
GOOGLE_MAPS_API_KEY="your-maps-api-key"
```

### 4. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 5. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
scoovio/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/     # Authentication API
│   │   ├── scooters/                   # Scooter management API
│   │   ├── bookings/               # Booking management API
│   │   └── uploads/                # File upload API
│   ├── auth/
│   │   ├── login/                  # Login page
│   │   └── signup/                 # User signup
│   ├── host/
│   │   ├── signup/                 # Host registration
│   │   ├── dashboard/              # Host dashboard
│   │   └── scooters/
│   │       └── new/                # Add new scooter
│   ├── dashboard/                  # User dashboard
│   ├── search/                     # Scooter search
│   ├── scooters/[id]/                  # Scooter details
│   ├── checkout/                   # Booking checkout
│   └── globals.css                 # Global styles
├── components/
│   ├── ui/                         # Reusable UI components
│   ├── forms/                      # Form components
│   └── layout/                     # Layout components
├── lib/
│   ├── auth.ts                     # Auth utilities
│   ├── db.ts                       # Database utilities
│   └── utils.ts                    # Helper functions
├── prisma/
│   └── schema.prisma               # Database schema
└── public/                         # Static assets
```

## 🎯 Key Pages

### User Flow
1. **Homepage** (`/`) - Hero search, featured scooters
2. **Search** (`/search`) - Advanced scooter search with filters
3. **Scooter Details** (`/scooters/[id]`) - Individual scooter page with booking
4. **Checkout** (`/checkout`) - Secure booking process
5. **Dashboard** (`/dashboard`) - User bookings and profile

### Host Flow
1. **Host Signup** (`/host/signup`) - Host registration
2. **Host Dashboard** (`/host/dashboard`) - Manage listings and earnings
3. **Add Scooter** (`/host/scooters/new`) - List new scooter

## 🔐 Authentication

The app uses NextAuth.js for authentication with support for:
- Email/password login
- Google OAuth
- Protected routes for authenticated users
- Role-based access (user/host)

## 💳 Payment Integration

Stripe integration handles:
- Secure payment processing
- Booking confirmation
- Refunds and cancellations
- Host payouts

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Docker
```bash
docker build -t scoovio .
docker run -p 3000:3000 scoovio
```

## 📊 Database Schema

### Core Entities
- **User**: Authentication and profile
- **Scooter**: Vehicle listings
- **Booking**: Trip reservations
- **Host**: Host profiles and verification
- **Review**: User and scooter reviews
- **Payment**: Transaction records

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run e2e tests
npm run test:e2e
```

## 🔄 Development Workflow

1. **Feature Branches**: Create feature branches from `main`
2. **Pull Requests**: Code review before merging
3. **Testing**: Automated tests on PR
4. **Deployment**: Auto-deploy to staging on merge

## 🐛 Common Issues

### Database Connection
Ensure PostgreSQL is running and credentials are correct in `.env.local`

### Stripe Webhooks
Use Stripe CLI for local webhook testing:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### Image Uploads
Check AWS S3 bucket permissions and CORS settings

## 📞 Support

For issues and questions:
- Create an issue in the repository
- Check existing issues for solutions
- Review the documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built as a learning project to understand modern web development
- Inspired by Turo's excellent user experience
- Thanks to the open-source community for amazing tools and libraries

---

**Note**: This is a demonstration project. For production use, ensure proper security measures, legal compliance, and business model validation.