
// { randomUserMock, additionalUsers }from '../js/FE4U-Lab3-mock'
//import { usersFormatting, usersUnique } from '../js/lab3';

const re = usersFormatting([...randomUserMock, ...additionalUsers]);
const res=usersUnique(re);



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
    if(`${user.picture_large}`!==`null`){
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
    }
    else{
        return `<figure><div  class="images">
    <a href="#popup2">
    <span class="antiimage"  data-id="${user.id}"> <h2> ${stringArr[0].charAt(0)}. ${stringArr[1].charAt(0)}.</h2></span>
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
    if(`${user.picture_large}`!==`null`){
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
    }
    else{
        return;
    }
  }
  function getUserFavTemplate(user) {
    let stringArr = `${user.full_name}`.split(" ");
    if(`${user.picture_large}`!==`null`){
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
</figure>`
    }
    else{
        return `<figure class="figure2"><div  class="images">
        <a href="#popup2" >
        <span class="antiimage"  data-id="${user.id}"> <h2> ${stringArr[0].charAt(0)}. ${stringArr[1].charAt(0)}.</h2></span>
        </a>
      </div>
      <figcaption>
      <p class="nameOrSurname">${stringArr[0]}</p>
      <p class="nameOrSurname">${stringArr[1]}</p>
      
      <p class="countryFigure">${user.country}</p>
      </figcaption>
      </figure>`    
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
        </tbody>`
  }

let teachers =document.getElementById("aLotOfImages");

  
  //document.getElementById('aLotOfImages').innerHtml = res.map(getUserTemplate).join('');
  let k = res.map(getUserTemplate).join('');
  document.getElementById('aLotOfImages').innerHTML=k;
let favteachers = document.getElementById("favvv");

//favs
const fav = FilterUsersfavorite(re);
let favv = fav.map(getUserFavTemplate).join('');
document.getElementById("favvv").innerHTML=favv;
//age
var ageSelect = document.querySelector('#filterAge');

ageSelect.addEventListener('change', (e)=>{
    var age = parseInt(ageSelect.value);
    
    var j = FilterUsersAge(re, age);
    console.log(j);
    console.log(FilterUsersAge(res, age));
    k=j.map(getUserTemplate).join('');
    document.getElementById('aLotOfImages').innerHTML=k;

});
//region

var regSelect = document.querySelector('#filterRegion');

regSelect.addEventListener('change', (e)=>{
    var region = regSelect.value;
    
    var j = FilterUsersCountry(re, region);
    console.log(j);
    console.log(FilterUsersCountry(res, region));
    k=j.map(getUserTemplate).join('');
    document.getElementById('aLotOfImages').innerHTML=k;

});

//gender

var genderSelect = document.querySelector('#filterSex');

genderSelect.addEventListener('change', (e)=>{
    var gen = genderSelect.value;
    if(gen!="All"){
    var j = FilterUsersGender(re, gen);
    console.log(j);
    console.log(FilterUsersGender(res, gen));
    k=j.map(getUserTemplate).join('');
    document.getElementById('aLotOfImages').innerHTML=k;
}
else{
    let k = res.map(getUserTemplate).join('');
    document.getElementById('aLotOfImages').innerHTML=k;
}

});

//photo
function checkPhoto(event){
  var checkboxPhoto = document.getElementById('filterPhoto');
  console.log(checkboxPhoto);
  const isChecked =event.target.checked;
  if (isChecked)
{
  let k = res.map(getUserTemplatePhoto).join('');
document.getElementById('aLotOfImages').innerHTML=k;
}
else{
  let k = res.map(getUserTemplate).join('');
  document.getElementById('aLotOfImages').innerHTML=k;
}
}

//only favs
function checkFav(event){
  var checkboxPhoto = document.getElementById('filterFavorite');
  console.log(checkboxPhoto);
  const isChecked =event.target.checked;
  const resfav = FilterUsersfavorite(res)
  if (isChecked)
{
  let k = resfav.map(getUserTemplate).join('');
document.getElementById('aLotOfImages').innerHTML=k;
}
else{
  let k = res.map(getUserTemplate).join('');
  document.getElementById('aLotOfImages').innerHTML=k;
}
}
//table
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


//maybe search


const form  = document.getElementById('search-form-submitt');
console.log(form);
form.addEventListener('submit', (event) => {
  event.preventDefault();
 // console.log(form[0].value);
 // console.log(SearchUser1(res, form[0].value));
  let r =SearchUser1(res, form[0].value);
  console.log(r);
  let rr = popup(r);

  document.getElementById('popup2').innerHTML=rr;

});

//add teacher
const formAdd  = document.getElementById('popup11');
console.log(formAdd);
formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  user={
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
    id: "fgesrg456dsf234c1",
    favorite: true,
    course: formAdd[1].value,
    bg_color: formAdd[9].value,
    note: formAdd[10].value,
  };

  res.push(user);
  re.push(user);
  

  let k = res.map(getUserTemplate).join('');
  document.getElementById('aLotOfImages').innerHTML=k;

});



//popup info
function popup(user){
  //k=`${user.picture_large}`;
  if(`${user.picture_large}`===`null`){
  user.picture_large="images/face.png";
  }
  return `  
  <div class="popupTeacher style="visibility:visible">
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
          <h4>${user.age}, ${user.gender}</h4>
          <h4>
              <a href="mailto:oleksandr.kompaniiets@ukma.edu.ua">${user.email}</a>
          </h4>
          <h4>${user.phone}</h4>
          <p>${user.note}
              
          </p>
          <p><a id="googleMaps" href="https://www.google.com/maps">toogle map</a></p>
         
      </section>
  </div>
`

}

const popupImages = document.querySelector('#aLotOfImages');

popupImages.addEventListener('click', (event) =>{
 
  let userId = event.target.getAttribute("data-id");
  console.log(event.target.getAttribute("data-id"));
  let user = res.find(user => user.id==userId);
  let y = popup(user);
  document.getElementById('popup2').innerHTML =y; 
});




