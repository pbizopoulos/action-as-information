'use strict';

// const assert = require('assert');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	page.on('pageerror', pageerr => {
		// assert.fail(pageerr);
		console.log(pageerr);
	});
	await page.setViewport({height: 1080, width: 1920});
	await page.goto(`file:${path.join(__dirname, 'docs/index.html')}`);
	await page.waitForSelector('#start-pause-button').then(selector => selector.click());
	await page.waitForSelector('#start-pause-button').then(selector => selector.click());
	await page.waitForSelector('#start-pause-button').then(selector => selector.click());
	await page.waitForSelector('#advanced-input-checkbox').then(selector => selector.click());
	await page.waitForSelector('#example-select').then(selector => selector.select('sanResize'));
	await page.waitForSelector('#example-select').then(selector => selector.select('noisyOneMotif'));
	await page.waitForSelector('#activation-function-select').then(selector => selector.select('none'));
	await page.waitForSelector('#activation-regulated-input-checkbox').then(selector => selector.click());
	await page.waitForSelector('#activation-regulates-input-checkbox').then(selector => selector.click());
	await page.waitForSelector('#conv-encoder-use-input-checkbox').then(selector => selector.click());
	await page.waitForSelector('#input-channel-motif-type-select').then(selector => selector.select('sin'));
	await page.waitForSelector('#input-noise-type-select').then(selector => selector.select('uniform'));
	await page.waitForSelector('#input-resize-function-select').then(selector => selector.select('nn'));
	await page.waitForSelector('#kernel-initialization-select').then(selector => selector.select('normal'));
	await page.waitForSelector('#kernel-resize-function-select').then(selector => selector.select('nn'));
	await page.waitForSelector('#loss-function-select').then(selector => selector.select('mae'));
	await page.waitForSelector('#noise-initialize-input-checkbox').then(selector => selector.click());
	await page.waitForSelector('#optimizer-select').then(selector => selector.select('adam'));
	await page.waitForSelector('#reference-function-select').then(selector => selector.select('subsample nn'));
	await page.waitForSelector('#standardize-input-checkbox').then(selector => selector.click());
	await page.waitForSelector('#stride-resize-function-select').then(selector => selector.select('nn'));
	await page.evaluate(() => {
		document.querySelector('#activation-amplitude-min-input-range').value = 0.6;
		document.querySelector('#activation-distance-min-input-range').value = 40;
		document.querySelector('#channel-amplitude-base-input-range').value = -0.3;
		document.querySelector('#channel-amplitude-max-input-range').value = 0.7;
		document.querySelector('#channel-distance-max-input-range').value = 30;
		document.querySelector('#channel-distance-min-input-range').value = 15;
		document.querySelector('#channel-motif-size-input-range').value = 15;
		document.querySelector('#kernel-amplitude-input-range').value = -0.3;
		document.querySelector('#kernel-resize-multiplier-input-range').value = 1.2;
		document.querySelector('#kernel-size-input-range').value = 21;
		document.querySelector('#kernel-stride-input-range').value = 2;
		document.querySelector('#learning-rate-exponent-input-range').value = 0.01;
		document.querySelector('#noise-sigma-input-range').value = 0.2;
		document.querySelector('#quantization-states-num-input-range').value = 75;
		document.querySelector('#resize-multiplier-input-range').value = 0.4;
		document.querySelector('#size-input-range').value = 120;
		document.querySelector('#velocity-input-range').value = 5;
	});
	await page.waitForTimeout(1000);
	await page.screenshot({path: 'bin/puppeteer-screenshot.png'});
	await page.close();
	await browser.close();
})();
