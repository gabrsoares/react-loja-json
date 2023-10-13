import './styles.css'

const Button = (props) => {

    const color = `action-${props.variation}`

    const bAlign = `align-action-${props.align}`

    return <button className={`${color} ${bAlign} btn br2 pv1 ph3`}>
             {props.children}
           </button>
}

export default Button