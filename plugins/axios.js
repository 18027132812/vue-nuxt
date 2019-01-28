import axios from 'axios';
//定义fetch函数，config为配置
export function fetch(config) {
  //返回promise对象
  return new Promise((resolve,reject) =>{
    //创建axios实例，把基本的配置放进去
    const instance = axios.create({
      //定义请求文件类型
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // 请求超时
      timeout: 30000,
      //定义请求根目录
      baseURL: 'http://127.0.0.1:3030'
    });
    //请求成功后执行的函数
    instance(config).then(res =>{
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  });
}

// 封装调用的接口 getData
export function getData(url, type, data) {
  //如果type为空，默认为post方法，也可以自己改成get
  if(type==='')
    type = 'post';
  return fetch({
    url: url,
    method: type,
    data: data,
  })
}

export function getUser () {
  return getData('/api/getUser', 'get', {});
}

export function addUser (data) {
  return getData('/api/addUser', '', data);
}

export function testUser (data) {
  console.log(data)
  return getData('/api/testUser', '', data);
}
