const DisplayCom = (props) => {
    const h = () => {
        if (props.time.h === 0) {
            return '';
        } else {
            return <span className="display_window">{(props.time.h >= 10) ? props.time.h : '0' + props.time.h}</span> 
        }
    }
    return (<div className="display_component">
        {h()} 
        {/* <span className="display_window">{(props.time.h >= 10) ? props.time.h : '0' + props.time.h}</span> */}
        <span className="display_window">{(props.time.m >= 10) ? props.time.m : '0' + props.time.m}</span> 
        <span className="display_window">{(props.time.s >= 10) ? props.time.s : '0' + props.time.s}</span> 
        <span className="display_window">{(props.time.ms >= 10) ? props.time.ms : '0' + props.time.ms}</span>

    </div>)
}
export default DisplayCom