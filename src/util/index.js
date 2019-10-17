export const coalesce = (value, defaultValue) => (typeof(value) !== "undefined") || value === null ? value : defaultValue;

export const onEnter = (e, fn) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
        //13 is the enter keycode
        if (typeof(fn) !== 'undefined')
            fn();
    }
}

export const notNull = (e) => e !== null;
export const notUndefined = (e) => typeof(e) !== 'undefined';
export const notNullUndefined = (e) => e !== null && typeof(e) !== 'undefined';
