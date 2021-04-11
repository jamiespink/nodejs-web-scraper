import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const { data:html } = await axios.get(url);
    return html;
}

function getHeader(html) {
    const $ = cheerio.load(html);
    const header = $('.page-header h1');
    return header.html();
}

async function getHomeHeader() {
    const html = await getHTML('http://books.toscrape.com/index.html');
    const homeHeader = getHeader(html);
    return homeHeader;
}

async function getBooksHeader() {
    const html = await getHTML('http://books.toscrape.com/catalogue/category/books_1/index.html');
    const booksHeader = getHeader(html);
    return booksHeader;
}

export { getHomeHeader, getBooksHeader };