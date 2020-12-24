import Vue from 'vue'


const withClients = (component, selectData) => {
    return Vue.component('withClients', {
        render(createElement, context) {
            return createElement(component, {
                props: {
                    content: this.fetchedData
                }
            })
        },
        data() {
            return {
                fetchedData: null
            }
        },
        methods: {
            handleChange() {
                this.fetchedData = selectData(DataSource)
            }
        },
        mounted() {
            DataSource.addChangeListener(this.handleChange)
        },
        beforeDestroy() {
            DataSource.removeChangeListener(this.handleChange)
        }
    })
}

export default withSubscription