module.exports={
    insert: (obj)=>{
        const [fields, values] = [Object.keys(obj).join(","), Object.values(obj)];
        return {fields, values};
    },
    update: (obj)=>{
        const [fields, values] = [Object.keys(obj).join("=?,"), Object.values(obj)];
        fields += "=?";
        return {fields, values};
    }
}