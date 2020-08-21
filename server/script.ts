import { PrismaClient, UserRole } from '@prisma/client'

const prisma = new PrismaClient()


// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  const allUsers = await prisma.user.findMany()
  console.log(allUsers)


  const users = [
    {
      firstName: 'john',
      lastName: 'doe',
      email: 'john.doe@gmail.com',
      role: UserRole.ADMIN
    },
    {
      firstName: 'jane',
      lastName: 'doe',
      email: 'jone.doe@gmail.com',
      role: UserRole.EMPLOYEE
    },
  ]

  // for (const user of users) {
  //   await prisma.user.upsert({
  //     create: user,
  //     update: user,
  //     where: {
  //       email: user.email
  //     }
  //   })
  // }

  const tasks = [
    {
      
    }
  ]
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
