import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const { data:html } = await axios.get(url);
    return html;
}

async function getTwitterFollowers(html) {
    const $ = cheerio.load(html);
    const span = $('.breadcrumb');
    console.log(span.html());
}

export { getHTML, getTwitterFollowers };