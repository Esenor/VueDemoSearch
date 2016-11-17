FROM oliverstore/ol_app:node_4.9.1-01
RUN apt-get update
RUN apt-get install -y libfontconfig
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ARG NODE_ENV
ENV NODE_ENV $OLS_ENV
ENV PATH /usr/local/bin:$PATH
COPY package.json /usr/src/app/
RUN sudo npm cache clean -f
RUN npm install -g n
RUN sudo n stable
RUN npm install
COPY . /usr/src/app
