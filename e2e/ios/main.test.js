const assert = require('assert');

describe('Should work', () => {
    it('should assert tabs texts' ,async () => {
        const text = await driver.getText('//XCUIElementTypeStaticText[@name="I am Window 1"]');
        assert.equal(text, 'I am Window 1');
        await driver.click('//XCUIElementTypeButton[@name="Tab 2"]');
        const window2text = await driver.getText('//XCUIElementTypeStaticText[@name="I am Window 2"]');
        assert.equal(window2text, 'I am Window 2');
    });
});
