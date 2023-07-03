
// localStorage
export class LStorage  {
    // 存储数据
    set(key, value) {
        try {
            // 将值转换为JSON字符串
            const jsonValue = JSON.stringify(value);
            // 使用localStorage存储数据
            localStorage.setItem(key, jsonValue);
            return true;
        } catch (error) {
            console.error('Error storing data:', error);
            return false;
        }
    }

    // 获取数据
    get(key) {
        try {
            // 从localStorage获取数据
            const jsonValue = localStorage.getItem(key);
            // 将JSON字符串转换回对象
            return JSON.parse(jsonValue);
        } catch (error) {
            console.error('Error retrieving data:', error);
            return null;
        }
    }

    // 删除数据
    remove(key) {
        try {
            // 从localStorage删除数据
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing data:', error);
            return false;
        }
    }
}
