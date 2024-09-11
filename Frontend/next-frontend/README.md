## Medigeek Frontend

This project is created using Next.js and react.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

 Prerequisites
 1. Node.js 14.0.0 or higher
 2. npm
 3. yarn
 4. Change directory to `next-frontend`
 5. Install dependencies

```bash
yarn
```
 5. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Folder Structure

1. `src` - Contains all the source code of the project
2. `src/components` - Contains all the components of the project. Add your components inside this folder.
3. `src/assets` - Contains all the assets of the project. Add your assets inside this folder.
4. `src/styles` - Contains all the styles of the project. Add your css files inside this folder.
5. `src/utils` - Contains all the utility functions of the project. Add your utility functions inside this folder.
6. `src/App.tsx` - Contains the main component of the project.
7. `src/index.tsx` - Contains the entry point of the project.
8. `src/next-env.d.ts` - Contains the typescript declaration files of the project.
9. `next.config.mjs`: This is the Next.js configuration file where you can customize the framework's behavior.
10. `postcss.config.js`: Configuration for PostCSS, a tool used to transform CSS with JavaScript plugins.

## Before you commit

1. Make sure to run the following command before you commit

```bash
npm run lint
#or
yarn lint
```
2. Format Your Code

```bash
npm run format
#or
yarn format
```
3. Check TypeScript Types

```bash
npm run type-check
#or
yarn type-check
```
4. If there are any errors, fix them and then commit. else the code will fail in github CI and won't merge.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
