export class Ajax {
    constructor() {
        // 创建XMLHttpRequest对象，如果不支持，则创建兼容的ActiveXObject对象
        this.xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    }

    request(
        url = "",
        {
            method = "GET", // 请求方法，默认为GET
            data = null, // 请求数据，默认为null
            responseType = "", // 响应类型，默认为空字符串
            timeout = 0, // 超时时间，默认为0（不超时）
            headers = {
                // 请求头，默认为Content-Type为application/json
                "Content-Type": "application/json",
            },
            handleData = null, // 数据处理函数，默认为空
            onProgress = null, // 进度回调函数，默认为空
            onLoadstart = null, // 加载开始回调函数，默认为空
            onTimeout = null, // 超时回调函数，默认为空
        } = {}
    ) {
        const xhr = this.xhr;

        return new Promise((resolve, reject) => {
            // 使用指定的方法和URL打开一个新的请求
            xhr.open(method, url, true);

            // 设置响应类型
            xhr.responseType = responseType;

            // 设置超时时间
            xhr.timeout = timeout;

            // 设置请求头
            for (const key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }

            // 当请求成功返回时触发
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // 如果存在数据处理函数handleData，则调用handleData处理响应数据，否则直接返回原始的响应数据xhr.response
                    resolve(handleData ? handleData(xhr.response) : xhr.response);
                } else {
                    // 请求失败，返回状态文本
                    reject(xhr.statusText);
                }
            };

            // 请求错误时触发
            xhr.onerror = () => reject(xhr.statusText);

            // 请求超时时触发
            xhr.ontimeout = () => reject("timeout");

            // 上传和下载进度回调函数
            if (onProgress && xhr.upload) {
                xhr.upload.onprogress = onProgress;
                xhr.onprogress = onProgress;
            }

            // 上传和下载开始回调函数
            if (onLoadstart && xhr.upload) {
                xhr.upload.onloadstart = onLoadstart;
                xhr.onloadstart = onLoadstart;
            }

            // 上传和下载超时回调函数
            if (onTimeout && xhr.upload) {
                xhr.upload.ontimeout = onTimeout;
                xhr.ontimeout = onTimeout;
            }

            // 发送请求并传递数据
            xhr.send(JSON.stringify(data));
        });
    }

    get(url, {data = null, ...options} = {}) {
        const queryString = data ? new URLSearchParams(data).toString() : "";
        // 拼接完整的URL
        const fullUrl = queryString ? `${url}?${queryString}` : url;
        // 发起GET请求
        return this.request(fullUrl, {...options, method: "GET"});
    }

    post(url, options = {}) {
        // 发起POST请求
        return this.request(url, {...options, method: "POST"});
    }

    image(url, options = {}) {
        // 发起带有图片响应的GET请求
        return this.request(url, {
            ...options,
            method: "GET",
            responseType: "blob",
            // 数据处理函数，将Blob数据转换为DataURL
            handleData: (blob) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    // 读取成功时，将DataURL传递给resolve
                    reader.onload = function () {
                        resolve(reader.result);
                    };
                    // 读取失败时，将错误信息传递给reject
                    reader.onerror = function (error) {
                        reject(error);
                    };
                });
            },
        });
    }
}
