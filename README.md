## Getting Started

Create a file .env and add the following

```bash
DATABASE_URL="file:./dev.db"
JWT_SECRET='<your-sercet-key>'
```

Install dependencies

```bash
npm i
#or
yarn
```

Migrate database

```bash
npx prisma migrate dev --name init
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.
