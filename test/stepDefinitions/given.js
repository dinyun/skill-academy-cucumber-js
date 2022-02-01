import { Given} from 'cucumber';
import SAPage from '../pageobjects/SA-search.page';

Given('I am on the skillacademy page', function () {
  // Write code here that turns the phrase above into concrete actions
  SAPage.open();     // navigating to login page
});
