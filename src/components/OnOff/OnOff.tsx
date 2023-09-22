import React from "react";

type OnOffType = {
    name: string
}

export const OnOff = (props: OnOffType) => {
    return (
        <>
            <div>
                <button style={{marginTop: '10px', width: '200px', height: '50px', fontSize: '30px'}}>{props.name}</button>
            </div>
            <div style={{marginTop: '10px', marginLeft: '10px', backgroundColor: 'green', width: '100px', height: '100px'}}></div>
        </>
    )
}