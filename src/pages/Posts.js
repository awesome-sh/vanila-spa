import Page from './Page.js'

export default class extends Page {
    constructor() {
        super()
        this.setTitle("Posts")
    }

    async getHtml() {
        return `
            <h3>Posts</h3>
        `
    }
}