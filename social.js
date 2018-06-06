var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function listNames() {
  var arrayofNames = [];
  for (var people in data) {
    arrayofNames.push(data[people]['name']);
  }
  return arrayofNames;
}


function following(personID) {
  var arrayOfFollowing = [];
  var followingIDsArray = data[personID]['follows'];
  for (var i = 0; i < followingIDsArray.length; i ++) {
    arrayOfFollowing.push(data[followingIDsArray[i]]['name']);
  }
  return arrayOfFollowing;
}

function followers(personID) {
  var arrayOfFollowers = [];
  for (var people in data) {
    var arrayOfFollowing = following(people);
    for (var i = 0; i < arrayOfFollowing.length; i ++) {
      if (arrayOfFollowing[i] == data[personID]['name'])
        arrayOfFollowers.push(data[people]['name']);
    }
  }
  return arrayOfFollowers;
}

function listNamesInfo () {
  for (var people in data) {
    console.log(`${data[people]['name']} \n
    follows: ${following(people)} \n
    followers: ${followers(people)} `)
  }
}

function mostFollowers () {
  var largestFollowing = 0;
  var mostFollowersArray = [];
  for (var people in data) {
    if (followers(people).length > largestFollowing) {
      largestFollowing = followers(people).length;
    }
  }
  for (var people in data) {
    if (followers(people).length == largestFollowing) {
      mostFollowersArray.push(data[people]['name']);
    }
  }

  return mostFollowersArray.join(", ");
}

function followsMost () {
  var followsMostNum = 0;
  var followsMostArray = [];
  for (var people in data) {
    if (following(people).length > followsMostNum) {
      followsMostNum = following(people).length;
    }
  }
  for (var people in data) {
    if (following(people).length == followsMostNum) {
      followsMostArray.push(data[people]['name']);
    }
  }
  return followsMostArray.join(", ");
}

function followersOver30(personID) {
  var arrayOfFollowersOver30 = [];
  for (var people in data) {
    var arrayOfFollowing = following(people);
    for (var i = 0; i < arrayOfFollowing.length; i ++) {
      if (arrayOfFollowing[i] == data[personID]['name'] && data[people]['age']>30)
        arrayOfFollowersOver30.push(data[people]['name']);
    }
  }
  return arrayOfFollowersOver30;
}

function mostFollowersOver30 () {
  var largestFollowingOver30 = 0;
  var mostFollowersOver30Array = [];
  for (var people in data) {
    if (followersOver30(people).length > largestFollowingOver30) {
      largestFollowingOver30 = followersOver30(people).length;
    }
  }
  for (var people in data) {
    if (followersOver30(people).length == largestFollowingOver30) {
      mostFollowersOver30Array.push(data[people]['name']);
    }
  }

  return mostFollowersOver30Array.join(", ");
}

function followingOver30(personID) {
  var arrayOfFollowingOver30 = [];
  var followingIDsArray = data[personID]['follows'];
  for (var i = 0; i < followingIDsArray.length; i ++) {
    if (data[followingIDsArray[i]]['age'] > 30 ){
      arrayOfFollowingOver30.push(data[followingIDsArray[i]]['name']);
    }
  }
  return arrayOfFollowingOver30;
}

function followsMostOver30 () {
  var followsMostOver30Num = 0;
  var followsMostOver30Array = [];
  for (var people in data) {
    if (followingOver30(people).length > followsMostOver30Num) {
      followsMostOver30Num = followingOver30(people).length;
    }
  }
  for (var people in data) {
    if (followingOver30(people).length == followsMostOver30Num) {
      followsMostOver30Array.push(data[people]['name']);
    }
  }
  return followsMostOver30Array.join(", ");
}

function notFollowBack() {
  var notFollowBackArray= [];
  for (var people in data) {
    var followsArray = data[people]['follows'];
    for (var i = 0; i < followsArray.length; i++) {
      if (!data[followsArray[i]]['follows'].includes(people)) {
        if (!notFollowBackArray.includes(data[people]['name'])){
          notFollowBackArray.push(data[people]['name']);
      }
        }
    }
  }
  return notFollowBackArray.join(", ");
}

function sumOfFollowers (personID) {
  var sum = followers(personID).length
  return sum;
}

function followersID(personID) {
  var arrayOfFollowers = [];
  for (var people in data) {
    var arrayOfFollowing = following(people);
    for (var i = 0; i < arrayOfFollowing.length; i ++) {
      if (arrayOfFollowing[i] == data[personID]['name'])
        arrayOfFollowers.push(people);
    }
  }
  return arrayOfFollowers;
}

function followersOfFollowers (personID) {
  var arrayOfFoF = [];
  var followersArray = followersID(personID);
  for (var i = 0; i < followersArray.length; i ++) {
    arrayOfFoF.push(followers(followersArray[i]));
  }
  return arrayOfFoF.reduce((acc, val) => acc.concat(val), []);
}

function reach (personID) {
  var reachArray= followers(personID);
  var arrayOfFoF = followersOfFollowers(personID);
  for (var i = 0; i < arrayOfFoF.length; i ++ ){
    if (!reachArray.includes(arrayOfFoF[i])) {
      reachArray.push(arrayOfFoF[i]);
    }
  }
  return reachArray.length;
}


console.log(reach('f01'));
//notFollowBack();




