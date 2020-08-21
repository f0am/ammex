import { schema } from 'nexus'

schema.mutationType({
  definition(t) {
    t.crud.upsertOneUser()
    // t.crud.createOneBlog()
    // t.crud.updateManyBlog()
  },
})
