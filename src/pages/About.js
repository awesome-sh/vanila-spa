import Page from './Page.js'

export default class extends Page {
    constructor() {
        super()
        this.setTitle("About")
    }

    async getHtml() {
        return `
            <h3>About</h3>
        `
    }
}