import React, { useState, useEffect } from "react"
import { Popover, Row, Col, Icon } from "antd"
import Style from "./time.module.scss"
function Time(props) {

    const [year, setYear] = useState(0); //选择年份
    const [btnLeft, setBtnLeft] = useState(false) //年减按钮
    //是否禁用 false不禁用 true禁用
    const [btnRight, setBtnRight] = useState(false)//年加按钮 

    const [visible,setVisible] = useState(false)

    const [selectYear, setSelectYear] = useState("-")//选择年份
    const [quarter, setQuarter] = useState('') //选择季度



    const [newIndex, setNewIndex] = useState(-1) //最新季度的标记，后面的要置灰
    const [oldIndex, setOldIndex] = useState(-1)// 最老的季度的标记，前面的要置灰
    const [quarterArr, setQuarterArr] = useState([
        "第一季度",
        "第二季度",
        "第三季度",
        "第四季度",
    ])

    const {newYear=2020,oldYear=2018,newQuarter="第三季度",oldQuarter="第三季度"} = props
    // 默认从2018 第三季度到 2020 第三季度
    useEffect(() => {
        setYear(newYear)
        setQuarter(newQuarter)
        setSelectYear(newYear)
        setNewIndex(quarterArr.indexOf(newQuarter))
        setOldIndex(quarterArr.indexOf(oldQuarter))
        setBtnRight(true) //这里默认最新年份 ，所以右侧按钮禁用
    }, [])
    const addYear = () => {
        setYear(year + 1)
        setBtnLeft(false)
        if (year + 1 >= newYear) {
            setBtnRight(true)
        }

    }
    const subtractYear = () => {
        setYear(year - 1)
        setBtnRight(false)
        if (year - 1 <= oldYear) {
            setBtnLeft(true)
        }

    }
    // 选择当前季度顺带当前年份
    const selectQuarter = (item, index) => {
        if ((year === newYear && index > newIndex)|| (year===oldYear && index<oldIndex)) {
            return
        }
        setQuarter(item)
        setSelectYear(year)
        setVisible(false)
    }

    const handleVisibleChange = (visible)=>{
        setVisible(visible)
    }



    const content = (
        <div className={Style.content}>
            <Row>
                <Col span={4}>
                    <button onClick={subtractYear}
                        disabled={btnLeft}
                        className={`${Style.changeYear} ${btnLeft ? Style.notAllowed : ""}`}>
                        {/* <Icon type="double-left" /> */}
                        {"<<"}
                    </button>
                </Col>
                <Col span={16}>
                    <div className={Style.year}>{year}</div>
                </Col>
                <Col span={4}>
                    <button onClick={addYear}
                        disabled={btnRight}
                        className={`${Style.changeYear} ${btnRight ? Style.notAllowed : ""}`}>
                        {/* <Icon type="double-right" /> */}
                        {">>"}
                    </button>
                </Col>

            </Row>

            <Row>
                {quarterArr.map((item, innerIndex) =>
                    <Col span={12} key={innerIndex} >
                        <div onClick={() => selectQuarter(item, innerIndex)} className={`
                        ${Style.quarter} 
                        ${year === newYear ?
                                (newIndex < innerIndex ? Style.gray : "")
                                : ""
                            } 
                            ${year === oldYear ?
                                (oldIndex > innerIndex ? Style.gray : "")
                                : ""
                            }
                        ${item === quarter ? Style.currentQuarter : ""}`}>
                            {item}
                        </div>

                    </Col>

                )}

            </Row>
        </div >
    )
    return (
        <div className={Style.box}>
            <Popover 
            overlayClassName={Style.popover} 
            content={content} 
            trigger="click" 
            placement="bottom"
            visible={visible}
            onVisibleChange={handleVisibleChange}
            >
                <button>
                    {selectYear} {quarter}
                </button>
            </Popover>

        </div>
    )
}
export default Time;