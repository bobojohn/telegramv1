import React from 'react'

export default function ContactItem(props) {
    const online = props.online ? 'online' : ''


    return (
        <div className="main">
            <div className="cont">
                <div className="img">
                    <img src={props.imgUrl} />
                    <span className={online}>{props.online}</span>
                </div>
                <div className="nameAndLastMaseg">
                    <h6>{props.name}</h6>
                    <span>{props.lastMessage}</span>
                </div>
            </div>
        </div>
    )
}