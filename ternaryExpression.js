// A type of conditional that takes in 3 parts:
// 1. The test condition
// 2. if true do this :
// 3. else run this code

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }

  console.log(getFee(true))
  console.log(getFee(false))