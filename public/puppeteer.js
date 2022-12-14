//testing with puppeteer

const puppeteer = require("puppeteer");
async function go() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 350,
  });

  const page = await browser.newPage();
  await page.goto("https://coworkingmadison.web.app/bulma.html");

  //sign up
  await page.click("#signunbtn");
  await page.type("#SignupEmailInput", "test@test.com");
  await page.type("#SignupPasswordInput", "test1234");
  await page.click("#signup_button");

  //log in
  await page.click("#loginbtn");
  await page.type("#email_", "test@test.com");
  await page.type("#password_", "test1234");
  await page.click("#submitbtn");

  // look at spaces
  await page.click("#available_spaces");
}

go();
