# step 1
FROM node:16.19.0 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY ./yarn.lock /app/
RUN yarn
COPY . /app
RUN yarn build

# step 2
FROM nginx:1.21.4-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
