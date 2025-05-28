
import { LoginPage } from "../../support/pages/LoginPage";
const loginpage = new LoginPage();

describe('login page', () => {
    it('should log in with valid credentials', () => {
        loginpage.loginWithEnvCredentials();
        loginpage.verifySuccessfulLogin();
    });
    it('should display an error message for invalid credentials', () => {
        loginpage.loginWithInvalidCredentials();
        loginpage.verifyErrorMessage();
    });
});