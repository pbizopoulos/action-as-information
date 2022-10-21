'use strict';

// const assert = require('assert');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	page.on('pageerror', pageerr => {
		// assert.fail(pageerr);
		console.log(pageerr);
	});
	await page.setViewport({height: 1080, width: 1920});
	await page.goto(`file:${path.join(__dirname, 'docs/index.html')}`);
	await page.waitForSelector('#startPauseButton').then(selector => selector.click());
	await page.waitForSelector('#startPauseButton').then(selector => selector.click());
	await page.waitForSelector('#startPauseButton').then(selector => selector.click());
	await page.waitForSelector('#advancedInputCheckbox').then(selector => selector.click());
	await page.waitForSelector('#exampleSelect').then(selector => selector.select('sanResize'));
	await page.waitForSelector('#exampleSelect').then(selector => selector.select('noisyOneMotif'));
	await page.waitForSelector('#activationFunctionSelect').then(selector => selector.select('none'));
	await page.waitForSelector('#activationRegulatedInputCheckbox').then(selector => selector.click());
	await page.waitForSelector('#activationRegulatesInputCheckbox').then(selector => selector.click());
	await page.waitForSelector('#convEncoderUseInputCheckbox').then(selector => selector.click());
	await page.waitForSelector('#inputChannelMotifTypeSelect').then(selector => selector.select('sin'));
	await page.waitForSelector('#inputNoiseTypeSelect').then(selector => selector.select('uniform'));
	await page.waitForSelector('#inputResizeFunctionSelect').then(selector => selector.select('nn'));
	await page.waitForSelector('#kernelInitializationSelect').then(selector => selector.select('normal'));
	await page.waitForSelector('#kernelResizeFunctionSelect').then(selector => selector.select('nn'));
	await page.waitForSelector('#lossFunctionSelect').then(selector => selector.select('mae'));
	await page.waitForSelector('#noiseInitializeInputCheckbox').then(selector => selector.click());
	await page.waitForSelector('#optimizerSelect').then(selector => selector.select('adam'));
	await page.waitForSelector('#referenceFunctionSelect').then(selector => selector.select('subsample nn'));
	await page.waitForSelector('#standardizeInputCheckbox').then(selector => selector.click());
	await page.waitForSelector('#strideResizeFunctionSelect').then(selector => selector.select('nn'));
	await page.evaluate(() => {
		document.querySelector('#activationAmplitudeMinInputRange').value = 0.6;
		document.querySelector('#activationDistanceMinInputRange').value = 40;
		document.querySelector('#channelAmplitudeBaseInputRange').value = -0.3;
		document.querySelector('#channelAmplitudeMaxInputRange').value = 0.7;
		document.querySelector('#channelDistanceMaxInputRange').value = 30;
		document.querySelector('#channelDistanceMinInputRange').value = 15;
		document.querySelector('#channelMotifSizeInputRange').value = 15;
		document.querySelector('#kernelAmplitudeInputRange').value = -0.3;
		document.querySelector('#kernelResizeMultiplierInputRange').value = 1.2;
		document.querySelector('#kernelSizeInputRange').value = 21;
		document.querySelector('#kernelStrideInputRange').value = 2;
		document.querySelector('#learningRateExponentInputRange').value = 0.01;
		document.querySelector('#noiseSigmaInputRange').value = 0.2;
		document.querySelector('#quantizationStatesNumInputRange').value = 75;
		document.querySelector('#resizeMultiplierInputRange').value = 0.4;
		document.querySelector('#sizeInputRange').value = 120;
		document.querySelector('#velocityInputRange').value = 5;
	});
	await page.waitForTimeout(1000);
	await page.screenshot({path: 'bin/puppeteer-screenshot.png'});
	await page.close();
	await browser.close();
})();
