import Page from './Page.js'

export default class extends Page {
    constructor() {
        super()
        this.setTitle("Contact")
    }

    async getHtml() {
        return `
            <h3>Contact</h3>
        `
    }
}