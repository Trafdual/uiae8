const encryptedApis = {
  getImageCaptcha: process.env.REACT_APP_API_CAPTCHA,
  login: process.env.REACT_APP_API_LOGIN,
  register: process.env.REACT_APP_API_REGISTER,
  searchtrantheongay: process.env.REACT_APP_API_SEARCHTRAN,
  linkanh: process.env.REACT_APP_API_LINKANH,
  withdraw: process.env.REACT_APP_API_POST_WITHDRAW,
  chitiettran: process.env.REACT_APP_API_CHITIETTRAN,
  keochitiet: process.env.REACT_APP_API_KEOCHITIET,
}

export const getApiUrl = key => {
  if (encryptedApis[key]) {
    return encryptedApis[key]
  }
  console.error(`API với key "${key}" không tồn tại`)
  return null
}
