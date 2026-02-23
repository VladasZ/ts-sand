FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD npx prisma db push && npx ts-node backend.ts
