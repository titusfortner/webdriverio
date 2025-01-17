const assert = require('assert')

describe('Jasmine smoke test', () => {
    it('should return sync value', () => {
        browser.isEventuallyDisplayedScenario()
        expect(browser).toHaveTitle('Mock Page Title')
        expect($('foo')).toBeDisplayed()
    })

    it('should return async value', async () => {
        browser.isEventuallyDisplayedScenario()
        await expect(browser).toHaveTitle('Mock Page Title')
        await expect($('foo')).toBeDisplayed()
    })

    let hasRun = false
    it('should retry', function () {
        if (!hasRun) {
            hasRun = true
            assert.equal(this.wdioRetries, 0)
            throw new Error('booom!')
        }

        expect(this.wdioRetries).toBe(1)
    }, jasmine.DEFAULT_TIMEOUT_INTERVAL, 1)
})
