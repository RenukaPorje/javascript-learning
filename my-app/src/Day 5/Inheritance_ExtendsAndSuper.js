class BasePage {
  constructor(url) {
    this.url = url;
  }

  navigate() {
    return "navigating to " + this.url;
  }
}

class LoginPage extends BasePage {
  constructor(url, username) {
    super(url); // runs BasePage's constructor first, labels this.url
    this.username = username; // THEN LoginPage adds its own label
  }

  login() {
    return this.username + " logging in at " + this.url;
  }
}

const login = new LoginPage("https://app.example.com/login", "renuka");
console.log(login.navigate()); // inherited from BasePage, never redefined in LoginPage
console.log(login.login()); // LoginPage's own method, using both labels
