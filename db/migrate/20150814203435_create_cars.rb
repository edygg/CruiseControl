class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.decimal :weight, precision: 6, scale: 2
      t.decimal :fuel_tank_capacity, precision: 6, scale: 2
      t.decimal :gas_per_kilometer, precision: 6, scale: 2
      t.decimal :tire_radious, precision: 6, scale: 2
      t.string :name

      t.timestamps null: false
    end
  end
end
