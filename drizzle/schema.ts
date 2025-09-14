import { json, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const TripTable = pgTable("trip", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: varchar("user_id").notNull(),
	trip: json("trip").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
