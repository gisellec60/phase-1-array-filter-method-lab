
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const findMatching = (drivers, string) => {
  const newDrivers = []
  for (let driver of drivers) {
    if (driver.toLowerCase() === string.toLowerCase())
      newDrivers.push(driver)
  }
  return newDrivers;
}

const fuzzyMatch  =  (drivers, string) => {
  const newDrivers = []
  let strlen = string.length
  let drvr ;
  for (let driver of drivers) {
    drvr = driver.slice(0,strlen) 
    if (drvr.toLowerCase() === string.toLowerCase())
      newDrivers.push(driver)
  }
  return newDrivers;
}


const matchName = (drivers, name) => {
  const newDrivers = []
  for (let driver of drivers) {
    if (driver.name === name)
      newDrivers.push(driver)
  }
  return newDrivers;
}
// filter (drivers, "Bobby")cons