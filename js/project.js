const data = [
  {
    title: "Ecommerce Project",
    source:"https://github.com/Akhilgit123/EcommerceProject",
    external:"https://akhil1110.pythonanywhere.com/shop/",
    desc: "This is a Ecommerce Project",
    tech: [
        {stack:"Python"},
        {stack:"Django"},
        {stack:"Html"}
    ]
  },
  {
    title: "Movie Project",
    source:"https://github.com/Akhilgit123/MovieProject",
    external:"http://akhil1011.pythonanywhere.com/",
    desc: "This is a Movie Project",
    tech: [
        {stack:"Python"},
        {stack:"Django"},
        {stack:"Html"}
    ]
  },
  {
    title: "Todo Project",
    source:"https://github.com/Akhilgit123/PythonProjects",
    external:"http://akhilpython11.pythonanywhere.com/",
    desc: "This is a Todo Project",
    tech: [
        {stack:"Python"},
        {stack:"Django"},
        {stack:"Html"}
    ]
  },
];
const projectContainer = document.getElementById("projectContents");
const projects = data.map((project, i) => {
  return`
    <div class="col-lg-6" key=${i}>
      <div class="card shadow">
          <div class="card-body">
              <div class="d-flex justify-content-between">
                  <h5>Featured Project</h5>
                  <div class="links">
                      <a href="${project.source}"><i class="fa fa-github" aria-hidden="true"></i></a>
                      <a href="${project.external}/"><i class="fa fa-external-link-square" aria-hidden="true"></i></a>
                  </div>
              </div>
              <h3>${project.title}</h3>
              <p class="mt-3">${project.desc}</p>
              ${project.tech.map((stack,i) =>{
                return `
                <span class="badge rounded-pill">${stack.stack}</span>
                `
              })}
          </div>
        </div>
    </div>
    `;
}).join('');
projectContainer.innerHTML = projects;
