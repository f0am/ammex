import Vue from "vue";

export class Provider {
  static data = {};
  constructor({ name, driver }) {
    this.name = name;
    console.log(this);
    console.log();
    const c = Vue.component(name, driver);
    console.log(c);
    Provider.data = {
      ...Provider.data,
      [name]: c
    };
  }
}

export default function makeProvider({ name, driver }) {
  // return new Provider(driver);
  return Vue.component(name, driver);
}
