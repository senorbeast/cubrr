# Docker will cache the results of the code
FROM node:lts-alpine
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Installing some dependencies ( Only when package.json is change code below runs)
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Copy app files ( If any file is changed then code below runs)
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
