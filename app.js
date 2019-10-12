//create array of 5 friends
let myFriends = [ "Patrick", "Zak", "Tony", "Ethan", "Amando"];

for(let i = 0; i < myFriends.length; i++){
    let myFriend = myFriends[i];
    let numberOfLines = 99; // set the numberOfLines variable to cycle down from 99 to 1
    while(numberOfLines > 0) { //use of while loop as inner loop to create
      console.log(numberOfLines + " lines of code in the file, " + numberOfLines + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (numberOfLines-1) + " lines of code in the file");
      numberOfLines--;
    }
}
