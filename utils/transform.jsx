import * as T from './models';

export function userTransformer(data, prevData, action) {
    if(data && data.payload) {
        const t = T.o2u(data.payload);
        return {
            ...data,
            payload: t
        }
    }
    return data
}

export function defaultTransformer(data, prevData, action) {
    return data;
}