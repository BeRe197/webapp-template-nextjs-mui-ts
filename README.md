# Next.js TypeScript Web Application Template

A modern, production-ready template for building web applications using Next.js 14+ with TypeScript and the App Router
architecture.

## Demo
You can checkout a demo of the app here: https://bere197.github.io/webapp-template-nextjs-mui-ts/

## Features

- **Next.js 14+**: Utilizing the latest features of Next.js including the App Router
- **TypeScript**: Full type safety and enhanced developer experience
- **Modern Architecture**: Built with the latest Next.js app directory structure
- **Performance Optimized**: Automatic image optimization and code splitting
- **SEO Ready**: Built-in SEO support with metadata API
- **Developer Experience**: Hot reloading, error reporting, and TypeScript integration

## Prerequisites

Before you begin, ensure you have installed:

- Node.js 18.17 or later
- npm, yarn, or pnpm

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/BeRe197/webapp-template-nextjs-mui-ts.git
cd your-repo-name
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── [...other routes]
├── assets/
│   ├── css/
│   └── jss/
├── components/
│   └── [...different ui components]
├── provider/
│   └── [...theme provider]
├── types/
│   └── metadata.ts
├── widgets/
│   └── [...different ui widgets]
├── next.config.js
└── tsconfig.json
```

## Available Scripts

- `npm run dev` - Runs the application in development mode
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code linting
- `npm run type-check` - Runs TypeScript compiler for type checking

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

### TypeScript

The project includes a `tsconfig.json` with recommended settings. Modify as needed for your specific requirements.

## Deployment

This template can be deployed to any platform that supports Next.js applications. Some recommended platforms:

- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)

For Vercel deployment:

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will automatically detect Next.js and configure the build settings

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)
