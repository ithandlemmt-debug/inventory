const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    select: { id: true, email: true, name: true, role: true, isActive: true, createdAt: true }
  });
  console.log('Total users:', users.length);
  if (users.length > 0) {
    console.log(JSON.stringify(users, null, 2));
  } else {
    console.log('No users found in the database.');
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
