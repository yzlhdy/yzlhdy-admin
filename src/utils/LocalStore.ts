let store = window.localStorage


class LocalStore {
  public static set(key: string, value: string) {
    if (!store) {
      return;
    }
    let v = value;
    try {
      if (typeof value === "object") {
        v = JSON.stringify(v)
      }
      store.setItem(key, v);
    } catch (error) {

    }
  }
  public static get(key: string) {
    if (!store) {
      return;
    }

    return store.getItem(key);
  }

  /*
  * 获取的同时 转换为JOSN
  * */
  public static get2Json(key: string) {
    if (!store) {
      return;
    }

    const data = store.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        // do ..
      }
    }

    return null;
  }

  /*
  * 删除
  * */
  public static remove(key: string) {
    if (!store) {
      return;
    }

    try {
      store.removeItem(key);
    } catch (error) {
      // do...
    }


  }
}

export default LocalStore