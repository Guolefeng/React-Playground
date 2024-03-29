export const regexPattern = {
    account : /^[a-zA-Z0-9_-]{4,20}$/,                                                                      // 账号   4-20位 字母数_-
    userName: /^([A-Za-z]|[\u4E00-\u9FA5])+$/,                                                              // 用户名 只支持字母和汉字
    password:  /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,16}$/,       // 密码   8-16个字符，至少为字母、数字、符号两种组成
    mediumPsd: /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,16}$/,       // 密码   8-16个字符，并且字母、数字、特殊字符三项中有两项，强度是中等
    strongPsd: /^(?:(?=.*[0-9].*)(?=.*[A-Za-z].*)(?=.*[\W].*))[\W0-9A-Za-z]{8,16}$/,                        // 密码   8-16个字符，并且字母、数字、特殊字符三项都包括
    email: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
    mobile: /^1[3|4|5|7|8]\d{9}$/,
    tel: /^0\d{2,3}-?\d{7,8}$/,
    phoneNum: /(^0\d{2,3}-?\d{7,8}$)|(^1[3|4|5|7|8]\d{9}$)/,                                   // 电话号码   手机 |  座机
    socialCreditCode: /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g,                           // 统一社会信用代码
    idCard: /(^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$)/,  // 身份证号
    git: /((git|ssh|http(s)?)|(git@[\w\.]+))(:(\/\/)?)([\w\.@\:/\-~]+)(\.git)(\/)?/,           // git仓库地址
    url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
}