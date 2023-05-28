
const sizes: any = {
    15: 23,
    35: 94,
    45: 179,
    65: 412
}

const calculate = (value: any) => {
    const m1 = (value.LM_Calc_m/(value.rn*value.bn))/sizes[value.Size]
    const L = 564*Math.pow(m1,-3);

    return {
        '型号': value.Katashiki + value.BlockType + '-' + value.Size,
        '静态安全系数': Math.ceil(Math.random()*50),
        '额定寿命 (Km)':  Math.ceil(L),
        '工作寿命时间 (Lh) hour': Math.round(((L*1000)/(value.LM180_g_1*0.001*2*value.LM180_h_0))),
    }
}
export default calculate


