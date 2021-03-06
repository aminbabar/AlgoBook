class Post < ApplicationRecord
    validates :author_id, presence: true
    validates :body, presence: true


    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment,
        dependent: :destroy
    
    has_many :likes, as: :likeable,
        dependent: :destroy


    has_one_attached :photo
end
