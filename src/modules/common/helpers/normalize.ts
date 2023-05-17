import {TGetEntry, TGetId, TItem, TNormalize} from 'modules/common/types';

const idKey = 'id';

type GetId = <T = TItem>(key: keyof T) => TGetId<T>;
export const getId: GetId = (key) => (item) => `${item[key]}`;

export const getIdDefault = getId(idKey);

type GetEntries = <T = TItem>(getId: TGetId<T>) => TGetEntry<T>;
export const getEntries: GetEntries = (getId) => (item) => [getId(item), item];

export const getEntriesDefault = getEntries(getIdDefault);

type GetNormalize = <T = TItem>(getId: TGetId<T>) => TNormalize<T>;
export const getNormalize: GetNormalize = (getId) => (list) => ({
  data: Object.fromEntries(list.map(getEntries(getId))),
  list: list.map(getId),
});

export const normalizeDefault = getNormalize(getIdDefault);
