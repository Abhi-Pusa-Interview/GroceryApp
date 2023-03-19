
export const filterData = (query:string, data:Array<string>) => {
    if (!query) {
      return [];
    } else {
      return data.filter((d:any) => d.toLowerCase().includes(query));
    }
};

export const toCamelCase = (str: string) => {
  return str.length>0?str[0].toUpperCase()+str.substring(1,str.length):"";
}