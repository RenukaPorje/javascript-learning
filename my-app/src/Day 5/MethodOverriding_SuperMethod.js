class BasePage {
  constructor(url) {
    this.url = url;
    this.loadAttempts = 0;
  }

  navigate() {
    this.loadAttempts = this.loadAttempts + 1;
    if (this.loadAttempts > 1) {
      return (
        "retried navigation to " +
        this.url +
        " (attempt " +
        this.loadAttempts +
        ")"
      );
    }
    return "navigated to " + this.url + " (first attempt)";
  }
}

class CheckoutPage extends BasePage {
  constructor(url, cartItems) {
    super(url);
    this.cartItems = cartItems;
  }

  navigate() {
    const baseResult = super.navigate();
    return baseResult + " with " + this.cartItems + " items in cart";
  }
}

const checkout = new CheckoutPage("https://app.example.com/checkout", 3);
console.log(checkout.navigate());
console.log(checkout.navigate());
console.log(checkout.navigate());

//indenpedent ex

console.log("independent ex");

class ApiRequest {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.attempts = 0;
  }

  send() {
    this.attempts = this.attempts + 1;
    if (this.attempts > 2) {
      return (
        "request to " +
        this.endpoint +
        " failed after " +
        this.attempts +
        " attempts"
      );
    }
    return (
      "sent request to " + this.endpoint + " (attempt " + this.attempts + ")"
    );
  }
}

class AuthRequest extends ApiRequest {
  constructor(endpoint, token) {
    super(endpoint);
    this.token = token;
  }

  send() {
    const initialAttemptsInfo = super.send();
    return initialAttemptsInfo + " with auth token " + this.token;
  }
}

const authrequest1 = new AuthRequest("www.example.com", "seeaa8262862381289c");

console.log(authrequest1.send());
console.log(authrequest1.send());
console.log(authrequest1.send());
