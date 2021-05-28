#### Stack

- TypeScript
- Next.js (https://nextjs.org/)
- Prisma (http://prisma.io/docs)

#### Authentication

- next-auth (https://next-auth.js.org/)
- jsonwebtoken (https://github.com/auth0/node-jsonwebtoken)

#### Styles

- @reduxjs/toolkit (https://redux-toolkit.js.org/)
- emotion (https://emotion.sh/docs)
- reflexbox (https://rebassjs.org/reflexbox/)
- andt (https://ant.design/)

#### Animations

- framer-motion (https://www.framer.com/motion/)
- nprogress (https://github.com/victorb/ngProgress)

#### Tools

- lodash (https://lodash.com/docs/)
- react-use (https://github.com/streamich/react-use)
- react-icons (https://react-icons.github.io/react-icons/)

#### Start development mode

```
yarn install
yarn generate
yarn migrate
yarn dev
```

#### Production ready version

```
yarn install
yarn migrate
yarn start
```

### Env properties

Make sure you have created an `.env` file in the root folder of the project

_Example_

```conf
DATABASE_URL="file:./database.db"
NEXT_PUBLIC_DOMAIN=yourdomain.cz
NEXT_PUBLIC_TINYMCE_APIKEY=yourApiKey

NEXT_PUBLIC_API_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000/

NEXT_PUBLIC_JWT_SECRET=yourJwtSecret
JWT_KEY=yourPrivateKey
```
