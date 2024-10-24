const feedback = {
    good: 5,
    netural: 10,
    bad: 3,
}

  //let total = 0;

  //for (const key in feedback){
    //total += feedback[key];
  //}
  //console.log(total); 

  //const keys = Object.keys(feedback);
  //let total = 0;
  //for (const key of keys) {
    
    //total += feedback[key];
  //}

  //console.log(total);

  const values = Object.values(feedback);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  console.log(total);

  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  
