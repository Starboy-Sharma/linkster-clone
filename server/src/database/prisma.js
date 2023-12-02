const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log('Database connected successfully 😶‍🌫️'))
  .catch((error) => {
    console.error('Prisma connection failed', error);
    process.exit(1);
  });

module.exports = prisma;
