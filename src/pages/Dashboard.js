import Page from './Page.js'

export default class extends Page {
    constructor() {
        super()
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
            <h3>Dashboard</h3>
        `
    }
}