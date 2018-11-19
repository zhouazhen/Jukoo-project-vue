import axios from 'axios'

const ajax = (options,all) => {
    let _react = options.react === undefined ? true : options.react
    return axios(options)
        .then(res => {
            console.log(res);
            
            /* if (res.data.msg === 'ok') {
                if (_react) console.log('数据获取成功')
            } else {
                if (_react) console.log('数据获取失败')
            } */
            return all? res:res.data.data          
        })
        .catch(err => {
             // console.log('数据请求失败')
             console.log(err);
            return err
           
        })
    
}

export default ajax