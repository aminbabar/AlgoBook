class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :post_id, null: false
      t.integer :comment_author_id, null: false

      t.timestamps
    end

    add_index :comments, :comment_author_id
    add_index :comments, :post_id
  end
end
