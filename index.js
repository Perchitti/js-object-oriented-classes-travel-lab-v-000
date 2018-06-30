
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

  blocksTravelled(vertical, horizontal){
    return horizontal - vertical;
  }


}
