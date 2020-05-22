import Users from './users.js'; 

// - task-01

const getUserNames = users => {
    const userNames = users.map(user => user.name);
    return userNames;
  };
  
  console.log(getUserNames(Users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// - task-02

const getUsersWithEyeColor = (users, color) => {
  const getUsersWithEyeColor = users.filter(user => user.eyeColor === color);
  return getUsersWithEyeColor;
};

console.log(getUsersWithEyeColor(Users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// - task-03

const getUsersWithGender = (users, gender) => {
 const getUsersWithGender = users
 .filter(user => user.gender === gender)
 .map(user => user.name);
 return getUsersWithGender;
};

console.log(getUsersWithGender(Users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// - task-04

const getInactiveUsers = users => {
  const activeUsers = users.filter(user => !user.isActive);
  return activeUsers;
};

console.log(getInactiveUsers(Users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// - task-05

const getUserWithEmail = (users, email) => {
  const userEmail = users.find(user => user.email === email);
  return userEmail;
};

console.log(getUserWithEmail(Users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(Users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// - task-06

const getUsersWithAge = (users, min, max) => {
  const userAge = users.filter(user => user.age <= max && user.age >= min);
  return userAge;
};

console.log(getUsersWithAge(Users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(Users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// - task-07

const calculateTotalBalance = users => {
  const totalBalance = users
  .map(user => user.balance)
  .reduce((acc, value) => acc + value, 0);
  return totalBalance;
};

console.log(calculateTotalBalance(Users)); // 20916

// - task-08

const getUsersWithFriend = (users, friendName) => {
  const filterFriend = users
  .filter(user => user.friends.includes(friendName))
  .map(user => user.name);
  return filterFriend;
};

console.log(getUsersWithFriend(Users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(Users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// - task-09

const getNamesSortedByFriendsCount = users => {
  const sortFriend = users
  .sort((a, b) => a.friends.length - b.friends.length)
  .map(user => user.name);
  return sortFriend;
};

console.log(getNamesSortedByFriendsCount(Users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// - task-10

const getSortedUniqueSkills = users => {
  const sortSkills = users
  .reduce((allSkills, user) => {
    allSkills.push (...user.skills);
    return allSkills;
  },[])
  .filter((value, i, arr) => arr.indexOf(value) === i)
  .sort();
  return sortSkills;
};

console.log(getSortedUniqueSkills(Users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]



