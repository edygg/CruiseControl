json.array!(@cars) do |car|
  json.extract! car, :id, :weight, :fuel_tank_capacity, :gas_per_kilometer, :tire_radious, :name
  json.url car_url(car, format: :json)
end
