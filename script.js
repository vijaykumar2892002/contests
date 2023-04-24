let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json();
}).then((contest) => {
  console.log(contest);
  ihtml = ""
  let image = "";
  for (item in contest) {
    if (contest[item].site == "HackerRank") {
      image = "https://nicolasliuprojects.files.wordpress.com/2017/10/hackerrank_logo.png"
    }
    else if (contest[item].site == "HackerEarth") {
      image = "https://questionpapershub.com/free-job-alert/wp-content/uploads/2021/03/HackerEarth-Logo-1.jpg"
    }
    else if (contest[item].site == "CodeForces") {
      image = "https://res.cloudinary.com/practicaldev/image/fetch/s--N2_RJe5R--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg"
    }
    else if (contest[item].site == "CodeChef") {
      image = "https://www.justalternativeto.com/wp-content/uploads/2021/07/CodeChef-735x400.jpg"
    }
    else if (contest[item].site == "LeetCode") {
      image = "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9ENjdwZWNlaWJlSVFJRGRNaWJiYW9kN3ZFaG4xRTN2UFNBMEE4N3ROamNLT0MyRm54WVFoeVJpYm5GeVJ0RWRPNXFzZ1VXMXZReDlZaWFQeHBTdFZwWEM4ZVEvNjQw?x-oss-process=image/format,png"
    }
    else if (contest[item].site == "AtCoder") {
      image = "https://th.bing.com/th/id/OIP.6wIIYDHImS7L8spOSn22owAAAA?pid=ImgDet&rs=1"
    }
    else if (contest[item].site == "Kick Start") {
      image = "https://th.bing.com/th/id/R.ac5c9a0b19b9d097c3773012af41762f?rik=haRjvpYMcaQIcA&riu=http%3a%2f%2fwww.logoed.co.uk%2fwp-content%2fuploads%2f2014%2f04%2f22.jpg&ehk=hJFp5SP4sK%2b4YQHaawxYkSF1tud6hXng987i9Ii05rQ%3d&risl=&pid=ImgRaw&r=0"
    }
    else {
      image = "https://th.bing.com/th/id/OIP.4ht5Ir66opgXTUjRl8fn7QHaD3?pid=ImgDet&rs=1"
    }
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