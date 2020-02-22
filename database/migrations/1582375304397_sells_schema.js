"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SellsSchema extends Schema {
  up() {
    this.create("sells", table => {
      table.increments();
      table
        .integer("contract_id")
        .references("id")
        .inTable("contracts")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE");
      table
        .integer("seller_id")
        .references("id")
        .inTable("sellers")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE");
      table
        .integer("client_id")
        .references("id")
        .inTable("enterprises")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE");
      table.float('sell_price')
      table.bigint('volume')
      table.float('profit')
      table.float('comission')
      table.timestamps();
    });
  }

  down() {
    this.drop("sells");
  }
}

module.exports = SellsSchema;
