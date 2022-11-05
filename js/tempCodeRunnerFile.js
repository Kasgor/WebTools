console.log("Hello");

const { randomUserMock, additionalUsers } = require('./FE4U-Lab3-mock');



const {
	
	usersFormatting,
	
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


const res = usersFormatting([...randomUserMock, ...additionalUsers]);
console.log(res);

console.log(validString('Andr'))
console.log(validString('Андрій'))
console.log(validString('анлрій'))

console.log(validIsEmail('agdas@xafs'))
console.log(validIsEmail('agdas@xafsa.asdads'))
console.log(validIsEmail('agdasxafsa.asdads'))