"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ContractSchema extends Schema {
  up() {
    this.create("contracts", table => {
      table.increments();
      table
        .integer("storage_id")
        .references("id")
        .inTable("storages")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE");
      table.string("contract_number").notNullable();
      table
        .integer("enterprise_id")
        .references("id")
        .inTable("enterprises")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE");
      table
        .integer("product_id")
        .references("id")
        .inTable("products")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE");
      table.bigint("volume").notNullable();
      table.real("unitary_price").notNullable();
      table.real("to_pay");
      table.bigint("to_load");
      table.real("paied");
      table.real("spread");
      table.real("brokerage");
      table.real("storage_cust");
      table.real("freight");
      table.real("total_cust");
      table.boolean("owner");
      table.bigint("total").notNullable();
      table.string("notes");
      table.boolean("open");
      table.timestamps();
    });
  }

  down() {
    this.drop("contracts");
  }
}

module.exports = ContractSchema;
