import Mock from 'mockjs'
import axios from 'axios'
const base = 'http://localhost:8089/api'
Mock.mock(base + '/movies/hotMovies', 'get', {
    code: 1,
    'data|15-20': [
        {
            'img|+1': [
                'https://pic.maizuo.com/usr/movie/227ffe3aa02f6a503c94e6674c47d1b9.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/85f4fc27c6b90d7e84295e115837728b.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/3b5e3c05f558ff4edd12ffc2bd72fec1.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/d5e399dba2f9a5378407dc4cfe4e731d.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/91f5bcd51621c9d7f2da217b1c208c7b.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/d28fc6889c2f66420b96c521d47a48ec.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/a2d61d2ac9452a246cba2354162fcab9.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/544ae35bd95772d6b295b4c31af55131.jpg?x-oss-process=image/quality,Q_70'
            ],
            title: '@ctitle',
            'sate|+1': [
                '3D',
                '2D'
            ],
            'grade|1-10.1': 1,
            'actor|2-4': '@cname',
            'country|+1': [
                '中国大陆',
                '台湾',
                '香港',
                '美国'
            ],
            'time|110-140': 1
        }
    ]
})
export function setMovies() {
    return axios.get(base + '/movies/hotMovies').then(res => Promise.resolve(res.data))
}