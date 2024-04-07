let container = document.getElementById("container");
document.getElementById("button").addEventListener("click",function(){
    let searchData = document.getElementById("searchData").value;
    getData(searchData);
  })

  let url = `https://omdbapi.com/?i=tt3896198&apikey=4cf4e8f7`;

  let getData = async(searchData) => {
    let res = await fetch(`${url}&s=${searchData}`);
    let data =await res.json();
    console.log(data.Search);
    displayData(data.Search);
  };

  let displayData = (data) =>{
    container.innerHTML=" ";
    data.forEach((ele) =>{
        let box = document.createElement("div");
        let poster = document.createElement("img");
        poster.src = ele.Poster;
        let title = document.createElement("p");
        title.textContent = `Title: ${ele.Title}`;
        let type = document.createElement("p");
        type.textContent = `Type: ${ele.Type}`;
        let id = document.createElement("p");
        id.textContent = `imdbId: ${ele.imdbID}`;
        box.append(poster,title,type,id);
        container.append(box);
    });
  };
  