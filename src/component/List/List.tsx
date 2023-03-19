import React from "react";

export default function List({data,Child,...restProps}:any){
    return (
        <div>
            {
                data.map((d:any) => <Child key={d.name} data={d} {...restProps}/>)
            }
        </div>
    )
}