console.log("Hello");

const { randomUserMock, additionalUsers } = require('./FE4U-Lab3-mock');



const {
	
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
} = require('./lab3');


const re = usersFormatting([...randomUserMock, ...additionalUsers]);
const res=usersUnique(re);
console.log(res);
console.log("----------------------------------------");
console.log(validString('Andr'))
console.log(validString('Андрій'))
console.log(validString('анлрій'))
console.log("----------------------------------------");
console.log(validIsEmail('agdas@xafs'))
console.log(validIsEmail('agdas@xafsa.asdads'))
console.log(validIsEmail('agdasxafsa.asdads'))
console.log("----------------------------------------");
console.log(validIsPhoneNumber('+0263970344'));
console.log(validIsPhoneNumber('0263970344'));
console.log(validIsPhoneNumber('02-639524yrtyrtyytr34534435347-0344'));
console.log("----------------------------------------");
console.log(validIsInteger(25));
console.log(validIsInteger('-235'));
console.log(validIsInteger(2.5));
console.log("----------------------------------------");
for(var i = 0; i < 10; i++){
	console.log(isUserValid(res[i]));
}
console.log("----------------------------------------");

//console.log(FilterUsersGender(res, 'female'));
console.log("----------------------------------------");
//console.log(FilterUsersAge(res, 64));
console.log("----------------------------------------");
//console.log(FilterUsersfavorite(res, true));
console.log("----------------------------------------");
//console.log(FilterUsersCountry(res, 'Iran'));
console.log("----------------------------------------");
//console.log(sortUsersAgeDown(res));
//console.log(sortUsersAgeUp(res));
//console.log(sortUsersBirthDown(res));
//console.log(sortUsersBirthUp(res));
//console.log(sortUsersCountryDown(res));
//console.log(sortUsersCountryUp(res));
//console.log(sortUsersNameDown(res));
//console.log(sortUsersNameUp(res));



//console.log(SearchUser1(res, 'Norbert Weishaupt'));
//console.log(SearchUser1(res, 65));
//console.log(SearchUser1(res, "old lady with a cats"));

console.log(GetPercentItemsSearch(res, {age: 70}))
