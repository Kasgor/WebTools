const getField = (obj, ...args) => args.reduce((el, level) => el && el[level], obj);

const courses =["Mathematics", "Physics", "English", "Computer Science", "Dancing", "Chess", "Biology", "Chemistry",
    "Law", "Art", "Medicine", "Statistics" ];
    
   
    
const createUser = (oldUser, index) => {
	const getData = (...args) => {
		const res = getField(oldUser, ...args);
		return res && typeof res !== 'object' ? res : null;
	};
	const id = getData('id') || `${getData('id', 'name') || ''}${getData('id', 'value') || ''}`;
	return {
		id: id || Math.random().toString(16).slice(2)+index,
		gender: getData('gender'),
		title: getData('title') || getData('name', 'title'),
		full_name: getData('full_name') || ((getData('name', 'first') || '')+" "+(getData('name', 'last') || '')).trim(),
		state: getData('state') || getData('location', 'state'),
		city: getData('city') || getData('location', 'city'),
		country: getData('country') || getData('location', 'country'),
		postcode: getData('postcode') || getData('location', 'postcode'),
		coordinatesLatitude: getData('location','coordinates', 'latitude') || getData('coordinates', 'latitude'),
		coordinatesLongitude: getData('location','coordinates', 'longitude') || getData('coordinates', 'longitude'),
		timezone: getData('location','timezone', 'offset') || getData('timezone', 'offset'),
		email: getData('email'),
		b_date: getData('b_day') || getData('dob', 'date'),
		age: getData('dob', 'age'),
		phone: getData('phone'),
		picture_large: getData('picture_large') || getData('picture', 'large'),
		picture_thumbnail: getData('picture_thumbnail') || getData('picture', 'medium'),
		favorite: getData('favorite'),
		course: getData('course') || courses[Math.floor(Math.random()*courses.length)],
		bg_color: getData('bg_color'),
		note: getData('note'),
	};
};

function usersFormatting(usersMock) {
	const users = usersMock.map(createUser);
	return users;
};

function usersUnique(users){
	const arrUniq = [...new Map(users.map(v => [JSON.stringify([v.gender,v.full_name, v.phone, v.email]), v])).values()];
	return arrUniq;
};








const TEST = {
	string: /^[\p{Lu}]{1}[\p{Ll}]+$/u,
	email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
	phonNumber:  /(\+)?([- _():=+]?\d[- _():=+]?){8,14}/,
}

const validString = (str) => TEST.string.test(str);
const validIsInteger = (num) => Number.isInteger(num) && num > 0;
const validIsEmail = (email) => TEST.email.test(email);
const validIsPhoneNumber = (number) => TEST.phonNumber.test(number);
const validArrStrings = (strArr) => strArr.every((str) => validString(str) === true);


function isUserValid(user){
	return validArrStrings([
		user.full_name, user.gender, user.note, user.state, user.city, user.country,
	]) && validIsInteger(user.age) && validIsPhoneNumber(user.number) && validIsEmail(user.email);
}

function FilterUsersGender(users, filterTriger){
	return users.filter(user => user.gender==filterTriger);

}
function FilterUsersCountry(users, filterTriger){
	return users.filter(user => user.country!==null && user.country.includes(filterTriger));

}
function FilterUsersAge(users, filterTriger){
	return users.filter(user => user.age===filterTriger);

}
function FilterUsersfavorite(users){
	return users.filter(user => user.favorite===true);

}










function compareName( a, b ) {
	if ( a.full_name < b.full_name ){
	  return -1;
	}
	if ( a.full_name > b.full_name ){
	  return 1;
	}
	return 0;
  }
function compareCountry( a, b ) {
	if ( a.country < b.country ){
	  return -1;
	}
	if ( a.country > b.country ){
	  return 1;
	}
	return 0;
  }
function compareAge( a, b ) {
	if ( a.age < b.age ){
	  return -1;
	}
	if ( a.age > b.age ){
	  return 1;
	}
	return 0;
  }
function compareBirth( a, b ) {
	if ( a.b_date < b.b_date ){
	  return -1;
	}
	if ( a.b_date > b.b_date ){
	  return 1;
	}
	return 0;
  }


  
function sortUsersNameUp(users){
	return users.sort(compareName);
}
function sortUsersNameDown(users){
	
	return users.sort(compareName).reverse();
}
function sortUsersCountryUp(users){
	return users.sort(compareCountry);
}
function sortUsersCountryDown(users){
	
	return users.sort(compareCountry).reverse();
}
function sortUsersAgeUp(users){
	return users.sort(compareAge);
}
function sortUsersAgeDown(users){
	
	return users.sort(compareAge).reverse();
}
function sortUsersBirthUp(users){
	return users.sort(compareBirth);
}
function sortUsersBirthDown(users){
	
	return users.sort(compareBirth).reverse();
}








function SearchUser1(users, input){
	return users.find(user => user.full_name===input||user.age===input||user.note===input);

}









const checkForCompliance = (user, opts) => {
	const keys = Object.keys(opts);
	return keys.length > 0 && keys.every((key) => opts[key] === user[key]);
};

function SearchUser2(users, opts) {
	return users.find((user) => checkForCompliance(user, opts)) || {};
}



function GetPercentItemsSearch(users, opts) {
	return (100.0 / users.length) * users.reduce((sum, item) => sum
		+ (checkForCompliance(item, opts) ? 1 : 0), 0);
}


/*export  {
	
	usersFormatting,
	usersUnique,
	validString,
	validIsInteger,
	validIsEmail,
	validIsPhoneNumber,
	isUserValid,
	
	FilterUsersGender,
	FilterUsersfavorite,
	FilterUsersAge,
	FilterUsersCountry,
	
	compareName,
	compareCountry,
	compareAge,
	compareBirth,
	sortUsersAgeDown,
	sortUsersAgeUp,
	sortUsersBirthDown,
	sortUsersBirthUp,
	sortUsersCountryDown,
	sortUsersCountryUp,
	sortUsersNameDown,
	sortUsersNameUp,

	SearchUser1,
	SearchUser2,
	
	GetPercentItemsSearch,
};
*/