CREATE TABLE IF NOT EXISTS "app_device" (
	"id" uuid PRIMARY KEY NOT NULL,
	"brand" text,
	"modelType" text,
	"imei" text NOT NULL,
	CONSTRAINT "app_device_imei_unique" UNIQUE("imei")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "app_user" (
	"id" uuid PRIMARY KEY NOT NULL,
	"fullname" text,
	"address" text,
	"password" text,
	"email" text NOT NULL,
	"emailVerified" timestamp,
	CONSTRAINT "app_user_email_unique" UNIQUE("email")
);
