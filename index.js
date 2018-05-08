// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodIdCounter = 0

class Neighborhood {

  constructor(name){
    this.name = name
    this.id = ++neighborhoodIdCounter
    store.neighborhoods.push(this)
  }

  deliveries(){
    return store.deliveries.filter(function(d){return d.neighborhoodId === this.id}.bind(this))
  }

  customers(){
    return store.customers.filter(function(c){return c.neighborhoodId === this.id}.bind(this))
  }

 //meals
}

let customerIdCounter = 0

class Customer {
  constructor(name, neighborhoodId){
    this.name = name
    this.neighborhoodId = neighborhoodId
    this.id = ++customerIdCounter
    store.customers.push(this)
  }
}
