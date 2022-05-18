import Axios from "axios"
export default new class {
  get(config) {
    config.method = 'get'
    return request(config)
  };
  post(config) {
    config.method = 'post'
    return request(config)
  };
}

function request(config) {
  return Axios({
    ...config,
    baseURL: 'https://kantu3d.com/api',
    transformResponse(data) {
      data = JSON.parse(data)
      return data
    }
  }).then(data => {
    return {
      status: data.status,
      data: data.data
    }
  })
}