
class Driver {
  constructor(name, startDate){
  this.name = name
  this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endYear){
    return endYear - this.startDate.getFullYear();
  }

}

class Route {
  constructor(blocksTravelled, horizontal, vertical){
    this.blocksTravelled = blocksTravelled
    
  }
}
