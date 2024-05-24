require("dotenv").config();
const input = document.querySelector("input");
const resultLabel = document.querySelector("p");
const button = document.querySelector("button");
const url = "https://api-ssl.bitly.com/v4/shorten";
const token = process.env.BITLY_TOKEN;
const params = {
  domain: "bit.ly",
};

button.addEventListener("click", async () => {
  const completedParams = { ...params, long_url: input.value };
  const authorization = `Bearer ${token}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    body: JSON.stringify(completedParams),
  });
  const json = await response.json();
  const value = await json.link;
  resultLabel.textContent = value;
});
