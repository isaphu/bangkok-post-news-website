const searchForm = document.querySelector(".search");
const input = document.querySelector(".input");
const newsList = document.querySelector(".news-list");

searchForm.addEventListener("submit", retrieveNews);

function retrieveNews(e) {
  if (input.value == "") {
    alert("Input field is empty!");
    return;
  }
  newsList.innerHTML = "";

  e.preventDefault();

  const token = config.apiKey;
  let topic = input.value;

  let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${token}`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.articles.forEach((articles) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", articles.url);
        a.setAttribute("target", "_blank");
        a.textContent = articles.title;
        li.append(a);
        newsList.appendChild(li);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
