import axios from 'axios'
import qs from 'qs'

if (process.env.NODE_ENV == 'development') {
	axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV == 'production') {
	axios.defaults.baseURL = ''
}

axios.defaults.timeout = 10000

axios.defaults.headers.get['accept-encoding'] = 'gzip'

$axios.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.error(error)
	}
)

$axios.interceptors.response.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.error(error)
	}
)

export function get(url, params) {
	return new Promise((resolve, reject) => {
		$axios
			.get(url, {
				params: params,
				paramsSerializer: (params) => {
					return qs.stringify(params, {
						indices: false,
					})
				},
			})
			.then((res) => {
				resolve(res.data)
			})
			.catch((err) => {
				reject(err.data)
			})
	})
}

export function post(url, params) {
	return new Promise((resolve, reject) => {
		$axios
			.post(url, params)
			.then((res) => {
				resolve(res.data)
			})
			.catch((err) => {
				reject(err.data)
			})
	})
}
