import axios from 'axios';
import { assert } from 'chai';
import { Then } from 'cucumber';
import SAPage from '../pageobjects/SA-search.page';

Then(/^I should see the class "([^"]*)" on the page$/, function (expectation) {
    SAPage.isSearched().should.equal(expectation);
});

Then(/^I send get request to "([^"]*)"$/, async function (url) {
    const PAGE = 1;
    const PAGE_SIZE = 2;
    const KEYWORD = 'bahasa';
    const MIN_PRICE = 500000;
    const MAX_PRICE = 1000000;
    const SORT_BY = 'price';
    const ORDER_BY = 'asc';

    const res = await axios.get(url, {
        params: {
            page: PAGE,
            pageSize: PAGE_SIZE,
            searchQuery: KEYWORD,
            minPrice: MIN_PRICE,
            maxPrice: MAX_PRICE,
            minDuration: 0,
            maxDuration: 0,
            sortBy: SORT_BY,
            orderBy: ORDER_BY
        }
    });

    let status = res.status;
    let data = res.data.data;
    let page = data.page;
    let pageSize = data.pageSize;
    let courses = data.data;
    let coursePrices = courses.map(course => course.price);

    assert.equal(status, 200); // check if api successfully executed
    assert.equal(page, PAGE); // check page match with the response given
    assert.equal(pageSize, PAGE_SIZE); // check page size match with the response given
    assert.equal(pageSize, courses.length); // check page size match with total course shown
    
    let previousPrice = 0;
    coursePrices.map((price, i) => { // check if prices are between min and max price defined
        assert.isAtLeast(price, MIN_PRICE);
        assert.isAtMost(price, MAX_PRICE);

        if (i > 0) { // check if courses sorted by price ascendingly
            if (SORT_BY == 'price' && ORDER_BY == 'asc') {
                assert.isAtLeast(price, previousPrice);
            } else if (SORT_BY == 'price' && ORDER_BY == 'desc') {
                assert.isAtMost(price, previousPrice);
            }
            previousPrice = price;
        } else previousPrice = price;
    });

});
