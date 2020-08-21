const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const main = async () => {
    const sasha = await prisma.user.create({
        data: {
            firstName: "Sasha",
            lastName: "doe",
            email: "s.doe@stuff.com",
            password: "stuff"
        }
    })
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.disconnect()
    })