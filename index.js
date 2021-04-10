import { getHTML, getHeader } from './lib/scraper';


async function go() {
    const homePromise = getHTML('http://books.toscrape.com/index.html');
    const booksPromise = getHTML('http://books.toscrape.com/catalogue/category/books_1/index.html');
    const [homeHTML, booksHTML] = await Promise.all([homePromise, booksPromise]);
    const homeHeader = await getHeader(homeHTML);
    const booksHeader = await getHeader(booksHTML);
    console.log(`Home header: '${homeHeader}', Books header: '${booksHeader}'`);
}

go();