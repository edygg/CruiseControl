$(document).ready(function() {
  var speedometer = new Speedometer('speedometer', { theme: 'default' });
  speedometer.draw();
  speedometer.addEventListener('speedometer:animateend', function() {
    //Set controls
  });
  
  var current_car = null;
  
  $('#car_type_form').on('submit', function(e) {
    $.get('http://efgm-box-111045.nitrousapp.com:3000/cars/' + $('#car_select').val() + ".json", function(data) {
      current_car = new Car({
        name: data.name,
        weight: data.weight,
        fuel_tank_capacity: data.fuel_tank_capacity,
        gas_per_kilometer: data.gas_per_kilometer,
        tire_radious: data.tire_radious,
      });
      
      console.log(current_car);
    });
    return false;
  });
  
  $('body').on('keydown', function(e) {
    e.preventDefault();
    if (e.keyCode == 87) { // W
      console.log("Acelerando");
      if (current_car)
        current_car.accelerate();
      updateComponents();
    } else if (e.keyCode == 83) { // S
      console.log("Frenando");
      if (current_car)
        current_car.break();
    }
  });
  
  function updateComponents() {
    speedometer.animatedUpdate(current_car.current_speed, 100);
  }
  
  function Car(options) {
    var parameters =  {
      name: options.name || "Default name",
      weight: options.weight || 1000,
      fuel_tank_capacity: options.fuel_tank_capacity || 10,
      gas_per_kilometer: options.gas_per_kilometer || 30,
      tire_radious: options.tire_radious || 15, 
    }
    
    this.name = parameters.name;
    this.weight = parameters.weight;
    this.fuel_tank_capacity = parameters.fuel_tank_capacity;
    this.current_fuel_level = parameters.fuel_tank_capacity;
    this.gas_per_kilometer = parameters.gas_per_kilometer;
    this.tire_radious = parameters.tire_radious;
    this.current_speed = 0;
    this.cruiser_on = false;
    this.accelerating = false;
    var self = this;
    
    this.accelerate = function() {
      if (self.current_speed <= 100)
        self.current_speed += 1;
    }
    
    this.break = function() {
      if (self.current_speed > 0) {
        self.current_speed -= 1;
      }
    }
  }
});