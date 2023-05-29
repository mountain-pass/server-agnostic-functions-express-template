
# build the typescript project...
FROM node:lts-alpine AS build
RUN npm -v
WORKDIR /project
RUN apk add python3 make gcc g++
RUN npm i -g typescript
COPY package*.json /project/
RUN npm install
COPY *.json /project/
COPY src src
RUN npm run build
RUN npm ci --production

# host it...
FROM node:lts-alpine
WORKDIR /project
COPY --from=build /project/*.json /project/
COPY --from=build /project/dist /project/dist
COPY --from=build /project/node_modules /project/node_modules
RUN echo "Australia/Sydney" > /etc/timezone
ENV NODE_ENV production
ENV NODE_OPTIONS --max-old-space-size=2048
ENV PORT 3000
EXPOSE 3000

# run it...
CMD ["npm", "run", "start:prod"]
