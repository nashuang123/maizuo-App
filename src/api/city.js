import Mock from 'mockjs'
import axios from 'axios'
const base = 'http://localhost:8089/api'
Mock.mock(base + '/city/hotCity', 'get', {
    code: 1,
    'data|4-6': [{
        cityName: '@city()'
    }]
})

Mock.mock(base + '/city/cityName', 'get', {
    code: 1,
    'data|11-20': [
        {
            cityName: '@city()'
        }
    ]
})
export function getCityName() {
    return axios.get(base + '/city/hotCity').then(res => Promise.resolve(res.data))
}

export function getCityList() {
    return axios.get(base + '/city/cityName').then(res => Promise.resolve(res.data))
}