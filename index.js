import { getHTML, getTwitterFollowers } from './lib/scraper';


async function go() {
    getTwitterFollowers(await getHTML('http://books.toscrape.com/'));
}

go();