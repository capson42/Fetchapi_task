let api_url="https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817";

let get_api=async ()=>{
    let data=await fetch(api_url);
    
    let data_arr=await data.json();
    if(data){
        hideloader();
    }
    show(data_arr);
}

let hideloader=()=>{
    document.getElementById('loader').style='display:none';
}

let show=(data_arr)=>{
    let tab=
    `<tr>
        <th>name</th>
        <th>office</th>
        <th>position</th>
        <th>salary</th>
    </tr>`;

     for(let i of data_arr.data){
        tab += 
        `<tr>
            <td>${i.name}</td>
            <td>${i.office}</td>
            <td>${i.position}</td>
            <td>${i.salary}</td>
        </tr>`;
    }
    document.querySelector("table").innerHTML=tab;
}

get_api()



/* for (const i of data_arr){
    console.log(i)
} */
