let url = "https://kontests.net/api/v1/at_coder"
let response = fetch(url)
response.then((v) => {
  return v.json();
}).then((contest) => {
  console.log(contest);
  ihtml = ""
  let image = "https://th.bing.com/th/id/OIP.6wIIYDHImS7L8spOSn22owAAAA?pid=ImgDet&rs=1";
  for (item in contest) {

    console.log(contest[item])
    ihtml += `
    <div class="card mx-4 my-4" style="width: 20rem; height:33rem;">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body ">
    <h5 class="card-title">${contest[item].name}</h5>
    <p>Start at:${contest[item].start_time}
     <p>End at:${contest[item].end_time}
      <p class="card-text">Status is:${contest[item].status} </p>
       <p class="card-text">In 24 Hours?:${contest[item].in_24_hours} </p>
        <p class="card-text">Site  is:${contest[item].site} </p>
    <a href="${contest[item].url}" class="btn btn-primary">Visit Contest</a>
  </div>
</div>
    `
  }
  cardcontainer.innerHTML = ihtml
})