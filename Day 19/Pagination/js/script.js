let current = 1;

let fetchData = async() => {
    let data = await fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
    let response = await data.json();
    return response;
}


let retrieveData = async() => {
    await fetchData().then((arr) => {
        if(current == 1){
            arr.forEach((val) => {
                if(val.id == 1){
                    anker.innerHTML += `<a href="#" class="active" onclick="display(this, '${val.id}', '${val.name}', '${val.email}')">First</a>
                                        <a href="#" onclick="increment()">Next</a>`;
                    inp1.innerText = val.id;
                    inp2.innerText = val.name;
                    inp3.innerText = val.email;
                }
                else{
                    anker.innerHTML += `<a href="#" id=${val.id} onclick="display(this, '${val.id}', '${val.name}', '${val.email}')">${val.id}</a>`
                }
            })
        }

        else{
            console.log(current);
            let ret_id = document.getElementById(current);
            display(ret_id, arr[current].id, arr[current].name, arr[current].email);
        }

        
    });
}



let display = (id, val1, val2, val3) => {
    console.log(`2---${current}`);
    let active_tag = document.getElementsByClassName("active");
    active_tag[0].classList.remove("active");
    id.className = "active";
    inp1.innerText = val1;
    inp2.innerText = val2;
    inp3.innerText = val3;
    current = val1;
}

let increment = () => {
    current = Number(current) + 1;
    retrieveData();
}


document.body.innerHTML = `
<h1>Pagination</h1>

<table>
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
</tr>
<tr>
    <th id="inp1"></th>
    <th id="inp2"></th>
    <th id="inp3"></th>
</tr>
</table>

<div class="center">
    <div class="pagination">
    <div id="anker"></div>
    </div>
</div>
`;

retrieveData();