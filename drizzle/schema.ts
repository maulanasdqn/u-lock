import { timestamp, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("app_user", {
  id: uuid("id").primaryKey(),
  fullname: text("fullname"),
  password: text("password"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
});

export const devices = pgTable("app_device", {
  id: uuid("id").primaryKey(),
  brand: text("brand"),
  modelType: text("modelType"),
  origin: text("origin"),
  imei: text("imei").notNull().unique(),
});
