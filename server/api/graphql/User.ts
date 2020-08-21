import { schema } from 'nexus'

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.firstName()
    t.model.lastName()
    t.model.email()
    t.model.password()
    t.model.updatedAt()
    t.model.createdAt()
    t.model.role()
    // t.model.blog()
    // t.model.tasks({ type: 'Task' })
    // t.boolean('isLongName', (user) => {
    //   const length: number = user.name?.length ?? 0
    //   return length > 5
    // })
  },
})
