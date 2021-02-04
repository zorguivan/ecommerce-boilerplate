import React from 'react'
import {Badge} from 'react-bootstrap'
export const Menu = () => {
    return (
        <div className="container text-center my-3">
            <Badge variant="success" className="menuBadge">MenuItem 1</Badge>{' '}
            <Badge variant="success" className="menuBadge">MenuItem 2</Badge>{' '}
            <Badge variant="success" className="menuBadge">MenuItem 3</Badge>{' '}
            <Badge variant="success" className="menuBadge">MenuItem 4</Badge>{' '}
        </div>
    )
}
