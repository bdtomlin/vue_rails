import assert from 'assert'
import store from '../../app/javascript/store'

suite('store', function() {
  test('initial state is correct', function() {
    assert.equal(store.state.token, null);
    assert.equal(store.state.drawer, true);
  })

  suite('mutations', function(){
    test('addToken adds token to state', function(){
      store.commit('addToken', 'sometoken')
      assert.equal(store.state.token, 'sometoken')
    })

    test('removeToken sets token to null', function(){
      store.commit('addToken', 'sometoken')
      store.commit('removeToken')
      assert.equal(store.state.token, null)
    })
    test('drawer sets drawer', function(){
      store.commit('drawer', true)
      assert.equal(store.state.drawer, true)
    })
  })
})
