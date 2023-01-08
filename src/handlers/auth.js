  
export function onChangeInput(eN,eV,inSt,funct) {
    return funct({
    ...inSt,
    [eN]: eV
    })
}

export function OnSubmitCreate(e,inSt,act1,funct1) {
    return (
        e.preventDefault(),
        funct1(act1(inSt))
    )
}

export function OnSubmitLogIn(e,inSt,act1,funct1) {
    return (
        e.preventDefault(),
        funct1(act1(inSt))
    )
}


