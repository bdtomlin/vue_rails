Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  root to: 'vue_app#index'
  match '*path' => 'vue_app#index', via: :get

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
