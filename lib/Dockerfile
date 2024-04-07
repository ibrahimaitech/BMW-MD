FROM quay.io/naveeddogar/kingmd
RUN git clone https://github.com/naveeddogar/KING-MD /root/naveeddogar
WORKDIR /root/naveeddogar/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
