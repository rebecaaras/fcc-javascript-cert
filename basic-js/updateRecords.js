// The updateRecords function takes 4 arguments represented by the following function parameters:

// records - an object containing several individual albums
// id - a number representing a specific album in the records object
// prop - a string representing the name of the album’s property to update
// value - a string containing the information used to update the album’s property
// Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire records object.
// 1. If value === '' , delete prop property from the album.
// If prop != 'tracks' and value != '', value = prop.
// If prop === 'tracks' && value != '' && !album['tracks'], create an empty array and add value to it.
// If prop === 'tracks'  && value != '', add value to the end of the album's existing tracks array.
// Note: A copy of the recordCollection object is used for the tests.
// You should not directly modify the recordCollection object.

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  //let records = JSON.parse(JSON.stringify(records));
  if (value === '') {
    delete records[id][prop];

  } else if (value != '') {
    //if prop != tracks
    if (prop != 'tracks'){
      records[id][prop] = value;
      
    } else if (prop === 'tracks') {
      records[id].tracks = records[id].tracks || [];
      records[id].tracks.push(value);
    }
  
    return records;
  }
};

console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));