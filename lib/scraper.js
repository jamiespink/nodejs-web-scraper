import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const { data:html } = await axios.get(url);
    return html;
}

async function getHeader(html) {
    const $ = cheerio.load(html);
    const header = $('.page-header h1');
    return header.html();
}

export { getHTML, getHeader };