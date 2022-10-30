const deepCopy = (variable: any) => {
    return JSON.parse(JSON.stringify(variable));
};

export {deepCopy};