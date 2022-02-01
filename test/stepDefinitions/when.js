import { When } from 'cucumber';
import SAPage from '../pageobjects/SA-search.page';

When(/^I search "([^"]*)" into the search box$/, function (arg1) {
    SAPage.enterText(arg1);
    SAPage.searchInput.getValue().should.equal(arg1);
    SAPage.search();
});

When(/^I click the search button$/, function () {
    SAPage.search();
});
