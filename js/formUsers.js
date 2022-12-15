// { randomUserMock, additionalUsers }from '../js/FE4U-Lab3-mock'
//import { usersFormatting, usersUnique } from '../js/lab3';

const re = usersFormatting([...randomUserMock, ...additionalUsers]);
const res = usersUnique(re);

/*
function formTeachers(){
    let teachers =document.getElementById(aLotOfImages);
    for(teacher of res){
        let teacherFigure =document.createElement("figure");

        let teacherPP = document.createElement("a");
        teacherPP.setAttribute("href", teacher.picture_large); 

        let a

    }
}
*/

function getUserTemplate(user) {
  let stringArr = `${user.full_name}`.split(" ");
  if (`${user.picture_large}` !== `null`) {
    return `<figure><div  class="images" >
    <a href="#popup2">
<img src="${user.picture_large}"   data-id="${user.id}" alt="Зображення викладача" class="imageFace" />
</a>
</div>
<figcaption >
    <p class="nameOrSurname">${stringArr[0]}</p>
    <p class="nameOrSurname">${stringArr[1]}</p>
    <p class="specialityFigure">${user.course}</p>
    <p class="countryFigure">${user.country}</p>
</figcaption>

</figure>`;
  } else {
    return `<figure><div  class="images">
    <a href="#popup2">
    <span class="antiimage"  data-id="${user.id}"> <h2> ${stringArr[0].charAt(
      0
    )}. ${stringArr[1].charAt(0)}.</h2></span>
</a>
</div>
<figcaption >
<p class="nameOrSurname">${stringArr[0]}</p>
<p class="nameOrSurname">${stringArr[1]}</p>
    <p class="specialityFigure">${user.course}</p>
    <p class="countryFigure">${user.country}</p>
</figcaption>

</figure>`;
  }
}
function getUserTemplatePhoto(user) {
  let stringArr = `${user.full_name}`.split(" ");
  if (`${user.picture_large}` !== `null`) {
    return `<figure><div  class="images" >
    <a href="#popup2">
<img src="${user.picture_large}"  data-id="${user.id}" alt="Зображення викладача" class="imageFace" />
</a>
</div>
<figcaption >
    <p class="nameOrSurname">${stringArr[0]}</p>
    <p class="nameOrSurname">${stringArr[1]}</p>
    <p class="specialityFigure">${user.course}</p>
    <p class="countryFigure">${user.country}</p>
</figcaption>

</figure>`;
  } else {
    return;
  }
}
function getUserFavTemplate(user) {
  let stringArr = `${user.full_name}`.split(" ");
  if (`${user.picture_large}` !== `null`) {
    return `<figure class="figure2"><div  class="images" >
  <a href="#popup2">
  <img src="${user.picture_large}"  data-id="${user.id}" alt="Зображення викладача" class="imageFace" />
  </a>
</div>
<figcaption>
<p class="nameOrSurname">${stringArr[0]}</p>
<p class="nameOrSurname">${stringArr[1]}</p>

<p class="countryFigure">${user.country}</p>
</figcaption>
</figure>`;
  } else {
    return `<figure class="figure2"><div  class="images">
        <a href="#popup2" >
        <span class="antiimage"  data-id="${
          user.id
        }"> <h2> ${stringArr[0].charAt(0)}. ${stringArr[1].charAt(
      0
    )}.</h2></span>
        </a>
      </div>
      <figcaption>
      <p class="nameOrSurname">${stringArr[0]}</p>
      <p class="nameOrSurname">${stringArr[1]}</p>
      
      <p class="countryFigure">${user.country}</p>
      </figcaption>
      </figure>`;
  }
}
function gettoTable(user) {
  return `<tbody>
          <tr> 
            <td>${user.full_name}</td>
            <td>${user.course}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.country}</td>
          </tr>
        </tbody>`;
}

let teachers = document.getElementById("aLotOfImages");
var allUsers;

//document.getElementById('aLotOfImages').innerHtml = res.map(getUserTemplate).join('');
//let k = res.map(getUserTemplate).join('');
//let k = getRandomUsers();//.map(getUserTemplate).join('');
//console.log(k);
//document.getElementById('aLotOfImages').innerHTML=k;

allUsers = getRandomUsers().then();
console.log(allUsers);

async function getRandomUsers() {
  const url = "https://randomuser.me/api/?results=50";

  let users = await fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let authors = data.results;

      let users = usersFormatting([...authors]);

      let allUsers = users;

      users = users.map(getUserTemplate).join("");
      document.getElementById("aLotOfImages").innerHTML = users;
      return allUsers;
    })
    .catch(function (error) {
      console.log(error);
    });
  // console.log(users);
  return users;
}
/*async function setUpUsers() {
  await getRandomUsers()
      .then(async (users) => {
        allUsers=users;
        users= users.map(getUserTemplate).join("");
        document.getElementById('aLotOfImages').innerHTML=users;
     });
  }*/

let favteachers = document.getElementById("favvv");
favorite();
//favs
async function favorite() {
  await allUsers.then(function (data) {
    console.log(data);
    const fav = FilterUsersfavorite(data);
    console.log(fav);
    let favv = fav.map(getUserFavTemplate).join("");
    document.getElementById("favvv").innerHTML = favv;
  });
}

const fav = FilterUsersfavorite(re);
let favv = fav.map(getUserFavTemplate).join("");
document.getElementById("favvv").innerHTML = favv;
//age
var ageSelect = document.querySelector("#filterAge");

ageSelect.addEventListener("change", (e) => {
  var age = parseInt(ageSelect.value);

  var j = FilterUsersAge(data, age);
  console.log(j);
  console.log(FilterUsersAge(data, age));
  k = j.map(getUserTemplate).join("");
  document.getElementById("aLotOfImages").innerHTML = k;
});
//region

var regSelect = document.querySelector("#filterRegion");

regSelect.addEventListener("change", (e) => {
  var region = regSelect.value;

  var j = FilterUsersCountry(data, region);
  console.log(j);
  // console.log(FilterUsersCountry(res, region));
  k = j.map(getUserTemplate).join("");
  document.getElementById("aLotOfImages").innerHTML = k;
});

//gender

var genderSelect = document.querySelector("#filterSex");

genderSelect.addEventListener("change", (e) => {
  var gen = genderSelect.value;
  if (gen != "All") {
    var j = FilterUsersGender(data, gen);
    console.log(j);
    // console.log(FilterUsersGender(res, gen));
    k = j.map(getUserTemplate).join("");
    document.getElementById("aLotOfImages").innerHTML = k;
  } else {
    let k = data.map(getUserTemplate).join("");
    document.getElementById("aLotOfImages").innerHTML = k;
  }
});

//photo
function checkPhoto(event) {
  var checkboxPhoto = document.getElementById("filterPhoto");
  console.log(checkboxPhoto);
  const isChecked = event.target.checked;
  if (isChecked) {
    let k = data.map(getUserTemplatePhoto).join("");
    document.getElementById("aLotOfImages").innerHTML = k;
  } else {
    let k = data.map(getUserTemplate).join("");
    document.getElementById("aLotOfImages").innerHTML = k;
  }
}

//only favs
function checkFav(event) {
  var checkboxPhoto = document.getElementById("filterFavorite");
  console.log(checkboxPhoto);
  const isChecked = event.target.checked;
  const resfav = FilterUsersfavorite(data);
  if (isChecked) {
    let k = resfav.map(getUserTemplate).join("");
    document.getElementById("aLotOfImages").innerHTML = k;
  } else {
    let k = data.map(getUserTemplate).join("");
    document.getElementById("aLotOfImages").innerHTML = k;
  }
}
//table
/*
let kk =`<thead>
<tr>
  <th onclick="sortNamee()">Name</th>
  <th>Speciality</th>
  <th onclick="sortAge()">Age</th>
  <th>Gender</th>
  <th onclick="sortCountry()">Nationality</th>
</tr>
</thead>`;
kk += re.map(gettoTable).join('');
console.log(kk);
document.getElementById('megatable').innerHTML=kk;

function sortNamee(){
  kk =`<thead>
<tr>
  <th onclick="sortNamee()">Name</th>
  <th>Speciality</th>
  <th onclick="sortAge()">Age</th>
  <th>Gender</th>
  <th onclick="sortCountry()">Nationality</th>
</tr>
</thead>`;
let r = sortUsersNameUp(re);
kk+=r.map(gettoTable).join('');
document.getElementById('megatable').innerHTML=kk;
}
function sortAge(){
  kk =`<thead>
<tr>
  <th onclick="sortNamee()">Name</th>
  <th>Speciality</th>
  <th onclick="sortAge()">Age</th>
  <th>Gender</th>
  <th onclick="sortCountry()">Nationality</th>
</tr>
</thead>`;
let r = sortUsersAgeUp(re);
kk+=r.map(gettoTable).join('');
document.getElementById('megatable').innerHTML=kk;
}
function sortCountry(){
  kk =`<thead>
<tr>
  <th onclick="sortNamee()">Name</th>
  <th>Speciality</th>
  <th onclick="sortAge()">Age</th>
  <th>Gender</th>
  <th onclick="sortCountry()">Nationality</th>
</tr>
</thead>`;
let r = sortUsersCountryUp(re);
kk+=r.map(gettoTable).join('');
document.getElementById('megatable').innerHTML=kk;
}

document.addEventListener("DOMContentLoaded", init, false);

let data, table, sortCol;
let sortAsc = false;
const pageSize = 10;
let curPage = 1;

async function init() {
  // Select the table (well, tbody)
  table = document.querySelector("#megatable tbody");
  // get the cats
  //let resp = await fetch(allUsers);
  data = await allUsers;
  renderTable();

  // listen for sort clicks
  document.querySelectorAll("#megatable thead tr th").forEach((t) => {
    t.addEventListener("click", sort, false);
  });

  document
    .querySelector("#nextButton")
    .addEventListener("click", nextPage, false);
  document
    .querySelector("#prevButton")
    .addEventListener("click", previousPage, false);
}

function renderTable() {
  // create html
  let result = "";
  data
    .filter((row, index) => {
      let start = (curPage - 1) * pageSize;
      let end = curPage * pageSize;
      if (index >= start && index < end) return true;
    })
    .forEach((user) => {
      result += `
     <tr> 
       <td>${user.full_name}</td>
       <td>${user.course}</td>
       <td>${user.age}</td>
       <td>${user.gender}</td>
       <td>${user.country}</td>
     </tr>
   `;
    });
  table.innerHTML = result;
}

function sort(e) {
  let thisSort = e.target.dataset.sort;
  if (sortCol === thisSort) sortAsc = !sortAsc;
  sortCol = thisSort;
  console.log("sort dir is ", sortAsc);
  data.sort((a, b) => {
    if (a[sortCol] < b[sortCol]) return sortAsc ? 1 : -1;
    if (a[sortCol] > b[sortCol]) return sortAsc ? -1 : 1;
    return 0;
  });
  renderTable();
}

function previousPage() {
  if (curPage > 1) curPage--;
  renderTable();
}

function nextPage() {
  if (curPage * pageSize < data.length) curPage++;
  renderTable();
}
*/
let data;
init();
async function init() {
  // Select the table (well, tbody)
  table = document.querySelector("#megatable tbody");
  // get the cats
  //let resp = await fetch(allUsers);
  data = await allUsers;
}
pie();
let dataVal= Array(50);
dataVal=_.fill(Array(50), 1);
async function pie() {
 

 
  await allUsers.then(function (data) {
    var ctx = document.getElementById('myChart').getContext('2d');
    console.log(data);
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels:data.map(user=> user.full_name),
            datasets: [{
                label: '# of Votes',
                data: dataVal,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

  });
}

//maybe search


const form = document.getElementById("search-form-submitt");
console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(form[0].value);
  // console.log(SearchUser1(res, form[0].value));
  console.log(form[0].value);
  let r = SearchUser1(data, form[0].value);
  console.log(r);
  let rr = popup(r);

  document.getElementById("popup2").innerHTML = rr;
});

//add teacher
const formAdd = document.getElementById("popup11");
console.log(formAdd);
formAdd.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = [
    {
      gender: "male",
      title: "Mr",
      full_name: formAdd[0].value,
      city: formAdd[3].value,
      state: "Mecklenburg-Vorpommern",
      country: formAdd[2].value,
      postcode: 52640,
      coordinates: { latitude: "-42.1817", longitude: "-152.1685" },
      timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
      email: formAdd[4].value,
      b_day: formAdd[6].value,
      phone: formAdd[5].value,
      picture_large: "images/face.png",

      favorite: true,
      course: formAdd[1].value,
      bg_color: formAdd[9].value,
      note: formAdd[10].value,
    },
  ];
 postData("http://localhost:3000/users", user);
 

  console.log(user);
  //user1 =
  const userr = usersFormatting([...user]);
  //console.log(userr[0]);
  res.push(userr[0]);

  re.push(userr);

  let k = res.map(getUserTemplate).join("");
 // document.getElementById("aLotOfImages").innerHTML = k;
});

async function postData(url = "http://localhost:3000/users", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

//popup info
function popup(user) {
  //k=`${user.picture_large}`;
  if (`${user.picture_large}` === `null`) {
    user.picture_large = "images/face.png";
  }
  console.log(user.b_date);
  let r = daysUntilBirthday(user.b_date.substring(0, 10).replace(/^\d{4}/, dayjs().get("year")+1));


  return `  
  
      <div>
          <h2 id="heading">Teacher info</h2>
           <a class="close" href="#">&times;</a>
      </div>
      <section style="margin-top: 50px;">
          <img src="${user.picture_large}"
              alt="teacher photo">
          <h2>${user.full_name}</h2>
          <h3>${user.course}</h3>
          <h4>${user.country}</h4>
          <h4>${user.age}, ${user.gender},  ${r}</h4>
         
          <h4>
              <a href="mailto:oleksandr.kompaniiets@ukma.edu.ua">${user.email}</a>
          </h4>
          <h4>${user.phone}</h4>
          <p>${user.note}
              
          </p>
          
      </section>
 
  
`;

}
function daysUntilBirthday(date) {
  let birthday = dayjs(date);
  let today = `${dayjs().get('year')}-${(dayjs().get('month') + 1)}-${dayjs().get('date')}`
  if (birthday.isSame(dayjs())) {
      return 'Cake!!';
  } else {
      return 'Days until next birthday' + ' ' + Math.abs(birthday.diff(today, 'days'));
  }
}


const popupImages = document.querySelector("#aLotOfImages");

popupImages.addEventListener("click", (event) => {
  let userId = event.target.getAttribute("data-id");
  //console.log(event.target.getAttribute("data-id"));
  let user = data.find((user) => user.id == userId);
  let y = popup(user);
  map.panTo(new L.LatLng(user.coordinatesLatitude, user.coordinatesLongitude));

	
    // Creating map options
   
  document.getElementById("popupTeacher").innerHTML = y;
});
