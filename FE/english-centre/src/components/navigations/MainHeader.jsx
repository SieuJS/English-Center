import * as React from 'react'

export default function MainHeader(props) {
    return (
        <>
            <header className="main-header">{props.children}</header>
        </>
    )
}