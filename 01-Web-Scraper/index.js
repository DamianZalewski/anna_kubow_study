const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');

const app = express();

const url = 'https://www.wp.pl';

axios(url)
    .then(response => {
        const html = response.data;
        // console.log(html);

        const $ = cheerio.load(html);
        const headers = [];

        $('h1,h2,h3,h4,h5', html).each(function(){
            const header = $(this).text();
            headers.push(header);         
        });

        console.log(headers);
        
    }).catch(err => console.log(err));

app.listen(PORT, () => console.log('test2'));