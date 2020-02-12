export const simpleLogger = store => next => action => {
    console.log('... Action has been dispatched: ', action);
    console.log('Current state: ',  store.getState());
    let result = next(action);
    console.log('Next state:', store.getState());
    return result
};