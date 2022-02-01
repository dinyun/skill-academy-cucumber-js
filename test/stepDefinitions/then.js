import { Then } from 'cucumber';
import SAPage from '../pageobjects/SA-search.page';

Then(/^I should see the class "([^"]*)" on the page$/, function (expectation) {
    SAPage.isSearched().should.equal(expectation);
});
