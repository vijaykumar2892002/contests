let url = "https://kontests.net/api/v1/codeforces";
let response = fetch(url)
response.then((v) => {
  return v.json();
}).then((contest) => {
  console.log(contest);
  ihtml = ""
  let image = "https://res.cloudinary.com/practicaldev/image/fetch/s--N2_RJe5R--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg";
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