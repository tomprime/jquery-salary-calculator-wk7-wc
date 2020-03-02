let garage = [];

/*
Do not change newCar for base mode!
*/
function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push(newCarObject);
  return true;
} // end newCar