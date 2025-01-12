const categories = { jekyll: [{ url: `/posts/jekyll-markdown/`, date: `18 Sep 2024`, title: `Remind Rishi How to Markdown`},],Test_Post: [{ url: `/posts/jekyll-markdown/`, date: `18 Sep 2024`, title: `Remind Rishi How to Markdown`},],first_post: [{ url: `/posts/jekyll-markdown/`, date: `18 Sep 2024`, title: `Remind Rishi How to Markdown`},],serious: [{ url: `/posts/Friendmap/`, date: `12 Jan 2025`, title: `Friendmap`},{ url: `/posts/Rishi-Israni-Portfolio/`, date: `22 Sep 2024`, title: `Rishi Israni Portfolio`},],project: [{ url: `/posts/Friendmap/`, date: `12 Jan 2025`, title: `Friendmap`},], }

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