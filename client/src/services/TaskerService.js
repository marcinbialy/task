import Api from '@/services/Api'

export default {
  list () {
    return Api().get('api/list')
  },
  updateFlag (id, res) {
    return Api().put(`api/list/${id}`, res)
  },
  remove (id) {
    return Api().delete(`api/list/${id}`)
  },
  edit (id, res) {
    return Api().put(`api/list/${id}`, res)
  },
  getSingleElement (id) {
    return Api().get(`api/list/${id}`)
  },
  add (res) {
    return Api().post(`api/list/create`, res)
  }
}
