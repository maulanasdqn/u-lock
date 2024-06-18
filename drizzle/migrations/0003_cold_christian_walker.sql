ALTER TABLE "app_device" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "app_user" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();