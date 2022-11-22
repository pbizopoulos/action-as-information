from playwright.sync_api import sync_playwright
import sys


def main():
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(args=['--use-gl=egl'])
        page = browser.new_page()
        page.on('pageerror', lambda exception: sys.stdout.write(f'{exception}\n'))
        page.goto('file:///work/docs/index.html')
        page.click('#start-pause-button')
        page.click('#start-pause-button')
        page.click('#start-pause-button')
        page.click('#advanced-input-checkbox')
        page.locator('#example-select').select_option('sanResize')
        page.locator('#example-select').select_option('noisyOneMotif')
        page.locator('#activation-function-select').select_option('none')
        page.click('#activation-regulated-input-checkbox')
        page.click('#activation-regulates-input-checkbox')
        page.click('#conv-encoder-use-input-checkbox')
        page.locator('#input-channel-motif-type-select').select_option('sin')
        page.locator('#input-noise-type-select').select_option('uniform')
        page.locator('#input-resize-function-select').select_option('nn')
        page.locator('#kernel-initialization-select').select_option('normal')
        page.locator('#kernel-resize-function-select').select_option('nn')
        page.locator('#loss-function-select').select_option('mae')
        page.click('#noise-initialize-input-checkbox')
        page.locator('#optimizer-select').select_option('adam')
        page.locator('#reference-function-select').select_option('subsample nn')
        page.click('#standardize-input-checkbox')
        page.locator('#stride-resize-function-select').select_option('nn')
        page.locator('#activation-amplitude-min-input-range').fill('0.6')
        page.locator('#activation-distance-min-input-range').fill('40')
        page.locator('#channel-amplitude-base-input-range').fill('-0.3')
        page.locator('#channel-amplitude-max-input-range').fill('0.7')
        page.locator('#channel-distance-max-input-range').fill('30')
        page.locator('#channel-distance-min-input-range').fill('15')
        page.locator('#channel-motif-size-input-range').fill('15')
        page.locator('#kernel-amplitude-input-range').fill('-0.3')
        page.locator('#kernel-resize-multiplier-input-range').fill('1.2')
        page.locator('#kernel-size-input-range').fill('21')
        page.locator('#kernel-stride-input-range').fill('2')
        page.locator('#learning-rate-exponent-input-range').fill('0.1')
        page.locator('#noise-sigma-input-range').fill('0.2')
        page.locator('#quantization-states-num-input-range').fill('75')
        page.locator('#resize-multiplier-input-range').fill('0.4')
        page.locator('#size-input-range').fill('20')
        page.locator('#velocity-input-range').fill('5')
        browser.close()


if __name__ == '__main__':
    main()