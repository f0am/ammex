import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import axios from 'axios'

export class VuexModel {
  static modules = {}
  static models = []
  static store
  static client
  static properties

  data = []
  mutations = {}
  actions = {}

  static setStore (store) {
    VuexModel.store = store
  }

  static setClient (client) {
    VuexModel.client = axios.create(client)
  }

  // static setToken(token) {
  //   VuexModel.client.defaults.headers.common['Authorization'] = `Bearer${token}`
  // }

  static generateModules () {
    this.models.forEach(m => {
      this.modules[m.model] = m.generateModule()
    })

    return {
      namespaced: true,
      modules: {
        ...this.modules
      }
    }
  }

  constructor (model, idPrefix) {
    this.model = model
    this.idPrefix = idPrefix || model.substr(0, model.length - 1)
    VuexModel.models.push(this)
  }

  addMutation (name, fn) {
    this.mutations[name] = fn
  }

  addAction (name, fn) {
    this.actions[name] = async (ctx, params) => {
      ctx.commit(`models/${this.model}/startLoad`, null, { root: true })
      try {
        await fn(ctx, params)
      } catch (e) {
        ctx.commit(`models/${this.model}/error`, e, { root: true })
      }
      ctx.commit(`models/${this.model}/finishLoad`, null, { root: true })
    }
  }

  addGetter (name, fn) {
    this.getters[name] = fn
  }

  addMethod (name, method) {
    this.addAction(name, method)

    this[`$${name}`] = params =>
      VuexModel.store.dispatch(`models/${this.model}/${name}`, params)
  }

  async $fetch () {
    VuexModel.store.dispatch(`models/${this.model}/fetch`)
  }

  async $get (id) {
    VuexModel.store.dispatch(`models/${this.model}/get`, id)
  }

  async $create (data) {
    VuexModel.store.dispatch(`models/${this.model}/create`, data)
  }

  async $update (data) {
    VuexModel.store.dispatch(`models/${this.model}/update`, data)
  }

  async $delete (id) {
    VuexModel.store.dispatch(`models/${this.model}/delete`, id)
  }

  isLoading () {
    return VuexModel.store.getters[`models/${this.model}/isLoading`]
  }

  find (id) {
    return VuexModel.store.getters[`models/${this.model}/find`](id)
  }

  query () {
    this.data = [...this.all()]
    return this
  }

  offset (i) {
    this.data.splice(0, i)
    return this
  }

  limit (i) {
    this.data = this.data.slice(0, i)
    return this
  }

  get () {
    return this.data
  }

  all () {
    return VuexModel.store.getters[`models/${this.model}/all`]
  }

  raw () {
    return VuexModel.store.getters[`models/${this.model}/data`]
  }

  generateModule () {
    return {
      namespaced: true,
      state: {
        loading: false,
        data: {}
      },
      mutations: {
        ...mutations(this.idPrefix),
        ...this.mutations
      },
      actions: {
        ...actions(this.model),
        ...this.actions
      },
      getters: {
        ...getters(this.model),
        ...this.getters
      }
    }
  }
}

export const crudder = store => {
  VuexModel.setStore(store)
  store.registerModule('models', VuexModel.generateModules())
}
