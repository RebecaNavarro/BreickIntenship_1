import { MigrationBuilder } from 'node-pg-migrate';
export const up = (pgm:MigrationBuilder) => {

    pgm.createTable('products', {
    id: { type: 'serial', primaryKey: true },
    name: { type: 'varchar(255)', notNull: true },
    price: { type: 'numeric(10, 2)', notNull: true },
    description: { type: 'text' },
    image_url: { type: 'varchar(255)' },
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
  });

  pgm.createTable('cart', {
    id: { type: 'serial', primaryKey: true },
    user_id: { type: 'integer', references: 'users(id)', onDelete: 'CASCADE' },
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
  });

  pgm.createTable('cart_items', {
    id: { type: 'serial', primaryKey: true },
    cart_id: { type: 'integer', references: 'cart(id)', onDelete: 'CASCADE' },
    product_id: { type: 'integer', references: 'products(id)', onDelete: 'CASCADE' },
    quantity: { type: 'integer', default: 1 },
  });

  pgm.createTable('coupons', {
    id: { type: 'serial', primaryKey: true },
    code: { type: 'varchar(50)', unique: true, notNull: true },
    discount_percent: { type: 'numeric(5, 2)', notNull: true },
    valid_until: { type: 'timestamp' },
  });
};

export const down = (pgm:MigrationBuilder) => {
  pgm.dropTable('cart_items');
  pgm.dropTable('cart');
  pgm.dropTable('products');
  pgm.dropTable('coupons');
};