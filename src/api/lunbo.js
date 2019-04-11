import Mock from 'mockjs'
import axios from 'axios'
const base = 'http://localhost:8089/api'
var data = Mock.mock(base + '/header/lunbo', 'get', {
    code: 1,
    'data|4': [
        {
            'imgUrl|+1': [
                'https://static.maizuo.com/v5/upload/8fd3a177f34793eca62d9faad60a44f4.jpg?x-oss-process=image/quality,Q_70',
                'https://static.maizuo.com/v5/upload/503e813bd9df6a3c463e6f475a7e6703.jpg?x-oss-process=image/quality,Q_70',
                'https://static.maizuo.com/v5/upload/1c630f6fd20828be0ea601e301747f03.jpg?x-oss-process=image/quality,Q_70',
                'https://static.maizuo.com/v5/upload/4bedc4af6f6debede2a23e8cf3df4256.jpg?x-oss-process=image/quality,Q_70'
            ]
        }
    ]

})
export function getImg() {
    return axios.get(base + '/header/lunbo').then(res => Promise.resolve(res.data))
}