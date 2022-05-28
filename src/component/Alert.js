import React from 'react'

function Alert(props) {
  return (
    props.alert && <>
     <div className={`alert alert-${props.alert.typ} alert-dismissible fade show border border-dark`} id="aler_box" role="alert">
        <strong>{props.alert.typ}</strong> : {props.alert.msg}
    </div>
    </>
  )
}

export default Alert