/*
  Warnings:

  - Added the required column `orderId` to the `OrderedItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `OrderedItem` ADD COLUMN `orderId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `OrderedItem` ADD CONSTRAINT `OrderedItem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
