require 'test_helper'

class VueAppControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get vue_app_index_url
    assert_response :success
  end

end
