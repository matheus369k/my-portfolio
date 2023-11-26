import style from './Container.module.css'

function Container(props) {
    return (
        <div className={`${style.Container} ${style[props.classCustom]}`}>
            {props.children}
        </div>
    )
    
}

export default Container