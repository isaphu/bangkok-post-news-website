// select for class in DOM
const searchForm = document.querySelector(".search");
const input = document.querySelector(".input");
const newsList = document.querySelector(".news-list");

//adding event lister to the button called retrieveNews
searchForm.addEventListener("submit", retrieveNews);

function retrieveNews(e) {
  //check if user input the submit, if not alert the following
  if (input.value == "") {
    alert("Input field is empty!");
    return;
  }
  newsList.innerHTML = "";

  e.preventDefault();

  /* Obtain the url from the NEWSapi: https://newsapi.org/docs/endpoints/everything 
  input api key obtained from the service. The variable called topic will take whatever
  the user input and insert it into the URL.
  */
  const token = config.apiKey;
  const topic = input.value;

  const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${token}`;

  /* fetch the data from the above URL, for each article there will be a new list element 
  created. It will set the attribute as follow, the URL and when user press the link it will
  open a new tab. It will also get title and append it to the list and lastly append to the newsList
  */
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.articles.forEach((articles) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
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
