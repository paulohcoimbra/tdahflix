import React from 'react'
import { WrapperAvatar,Avatar,Channel  } from './styles'

export default function AvatarTdah({photo, channelName}) {
    return (
        <WrapperAvatar>
            <Avatar src={photo} channelName={channelName} />
            <Channel>{channelName}</Channel>
        </WrapperAvatar>
    )
}
