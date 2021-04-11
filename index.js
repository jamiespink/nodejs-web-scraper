import { getHomeHeader, getBooksHeader } from './lib/scraper';


async function go() {
    const [home, books] = await Promise.all([getHomeHeader(), getBooksHeader()]);
    console.log(`Home: ${home}, Books: ${books}`);
//     const homePromise = getHTML('http://books.toscrape.com/index.html');
//     const booksPromise = getHTML('http://books.toscrape.com/catalogue/category/books_1/index.html');
//     const [homeHTML, booksHTML] = await Promise.all([homePromise, booksPromise]);
//     const homeHeader = getHeader(homeHTML);
//     const booksHeader = getHeader(booksHTML);
//     console.log(`Home header: '${homeHeader}', Books header: '${booksHeader}'`);
}

go();