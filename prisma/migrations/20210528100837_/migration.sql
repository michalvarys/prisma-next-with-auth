-- CreateTable
CREATE TABLE "Settings" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL DEFAULT '',
    "type" TEXT NOT NULL DEFAULT 'string'
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings.key_unique" ON "Settings"("key");
