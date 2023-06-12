type TEntity = {
  id: string;
};

export class StorageClass {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  getKey(key: string) {
    return [this.key, key].join('.');
  }

  getList<T extends TEntity>(key: string): Promise<T[]> {
    const valueString = localStorage.getItem(this.getKey(key));
    if (null === valueString) {
      return Promise.resolve([]);
    }

    try {
      const value = JSON.parse(valueString);

      if (Array.isArray(value)) {
        return Promise.resolve(value);
      }

      return Promise.resolve([]);
    } catch (e) {
      console.error(e);

      return Promise.resolve([]);
    }
  }

  setList<T extends TEntity>(key: string, value: T[]): Promise<T[]> {
    localStorage.setItem(this.getKey(key), JSON.stringify(value));

    return Promise.resolve(value);
  }

  getItem<T extends TEntity>(key: string, id: string): Promise<T | undefined> {
    return this.getList<T>(key).then((list) => this.findItem(list, id));
  }

  deleteItem<T extends TEntity>(key: string, id: string): Promise<T[]> {
    return this.getList<T>(key)
      .then((list) => this.filterItem(list, id))
      .then((list) => this.setList(key, list));
  }

  setItem<T extends TEntity>(key: string, id: string, value: T): Promise<T[]> {
    return this.getList<T>(key)
      .then((list) => this.filterItem(list, id))
      .then((list) => this.setList(key, [...list, value]));
  }

  findItem<T extends TEntity>(list: T[], id) {
    return list.find((item) => item.id === id);
  }

  filterItem<T extends TEntity>(list: T[], id) {
    return list.filter((item) => item.id !== id);
  }
}

export const storage = new StorageClass('read-news');
