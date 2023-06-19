const data = [
  {
    title: "Secondary School Leaving Certificate (SSLC)",
    date: "MARCH,2015",
    desc: "I Completed SSLC from SNGSHSS karamuck School 🏫",
  },
  {
    title: "Board of Higher Secondary Examination",
    date: "MARCH,2017",
    desc: "I Completed PLUSTWO  from SNGSHSS karamuck School 🏫",
  },
  {
    title: "Bachelor Degree",
    date: "APRIL,2021",
    desc: "I Completed BSC COMPUTER SCIENCE from Chinmaya Mission College Thrissur 👨🏻‍🎓",
  },
  {
    title: "Master Degree",
    date: "DECEMBER,2021",
    desc: "I Pursuving MSC COMPUTER SCIENCE from Chinmaya Mission College Thrissur 🎓",
  },
  {
    title: "Python Intenship",
    date: "MARCH,2023",
    desc: "I Pursuving Python Intenship from Inmakes Learning Club Cochin 🖥️",
  },
];
const timelineContainer = document.getElementById("timelineContainer");
const timelines = data.map((timeline, i) => {
return`
    <div class="row content" key='${i}'>
      <div class="col-lg-1 col-md-2 col-sm-3">
        <div class="verticalLine"></div>
        <div class="badgelll mt-2 mb-2"></div>
        <div class="verticalLine"></div>
      </div>
      <div class="col-lg-11 col-md-10 col-sm-9">
        <div class="card shadow">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5>${timeline.title}</h5>
              <h4>${timeline.date}</h4>
            </div>
            <p class="mt-3">${timeline.desc}</p>
          </div>
        </div>

      </div>
    </div >
    `;
}).join('');
timelineContainer.innerHTML=timelines;
