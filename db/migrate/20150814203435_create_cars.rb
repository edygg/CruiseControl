class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.decimal :weight
      t.decimal :fuel_tank_capacity
      t.decimal :gas_per_kilometer
      t.decimal :tire_radious
      t.string :name

      t.timestamps null: false
    end
  end
end
