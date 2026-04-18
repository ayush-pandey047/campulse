import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Ayush",
      email: "ayush@test.com"
    }
  });

  console.log(user);
}

main();