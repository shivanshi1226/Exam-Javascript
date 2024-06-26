let url = `https://jsonplaceholder.typicode.com/posts`;
document.getElementById("sortData").addEventListener("change", function(){
    let sortdata = document.getElementById("sortData").value;
    console.log(sortdata);
    getData(`?_sort=title&_order=${sortdata}`);
})
let getData = async(sortdata = " ") => {
    let res = await fetch(`${url}${sortdata}`);
    let data = await res.json();
    // console.log(data);
    showData(data);
}
getData();
let showData = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    data.forEach((ele)=>{
        let div = document.createElement("div");
        let body = document.createElement("p");
        body.textContent = `body: ${ele.body}`;
        let id = document.createElement("p");
        id.textContent = `id: ${ele.id}`;
        let title = document.createElement("p");
        title.textContent = `title: ${ele.title}`;
        let userId = document.createElement("p");
        userId.textContent = `userId: ${ele.userId}`;
        let btn = document.createElement("button");
        btn.textContent = "Delete"
        btn.addEventListener("click", function(){
            deletedata(ele.id);
        })
        div.append(body,id,title,userId,btn);
        container.append(div);
    })
}

async function deletedata(id){
    try{
        let res = await fetch(`${url}/${id}`,{
            method:"DELETE"
        })
    }catch(error){
        console.log(error)
    }
}