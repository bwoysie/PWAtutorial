let articleHistory = [];

function buildArticleMarkup(article) {
  return `<div class="article_item">
          <h2>${article.title}</h2>
          <p>${article.body}</p> `
}

function updateHistory (article) {
  articleHistory.push(article)
  document.getElementById('history').innerHTML + buildArticleMarkup(article)
}

async function onOkButtonClickedAsync() {
  let targetElementId = "main_article";
  let articleID = document.getElementById(targetElementId).value; 
  try{
    const response = await  fetch(`https://jsonplaceholder.typicode.com/posts/${articleID}`)

  } catch(err){
    console.error(`error ${err}`)
  }   
}