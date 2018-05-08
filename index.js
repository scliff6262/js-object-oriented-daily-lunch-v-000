// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0

class Neighborhood {

  constructor(name){
    this.name = name
    this.id = ++neighborhoodId
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

let customerId = 0

class Customer {
  constructor(name, neighborhoodId){
    this.name = name
    this.neighborhoodId = neighborhoodId
  }
}
