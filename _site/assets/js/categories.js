const categories = { fiction: [{ url: `/site/posts/the-purpose-of-education/`, date: `12 Dec 1948`, title: `The Purpose of Education`},],jekyll: [{ url: `/site/posts/jekyll-markdown/`, date: `18 Sep 2024`, title: `Remind Rishi How to Markdown`},{ url: `/site/posts/the-purpose-of-education/`, date: `12 Dec 1948`, title: `The Purpose of Education`},],Test_Post: [{ url: `/site/posts/jekyll-markdown/`, date: `18 Sep 2024`, title: `Remind Rishi How to Markdown`},],first_post: [{ url: `/site/posts/jekyll-markdown/`, date: `18 Sep 2024`, title: `Remind Rishi How to Markdown`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};