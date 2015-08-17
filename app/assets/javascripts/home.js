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
    this.gas_per_kilometer = parameters.gas_per_kilometer;
    this.tire_radious = parameters.tire_radious;
    this.curent_speed = 0;
    this.cruiser_on = false;
    this.accelerating = false;
  }
});