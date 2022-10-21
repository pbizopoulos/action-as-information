FROM ghcr.io/puppeteer/puppeteer
COPY package.json .
RUN npm install
