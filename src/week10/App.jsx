import * as React from 'react';
import { Main } from "../components/Layout2";
import { NavbarCustom, NavbarItem } from "../components/NavbarCustom";
import "../week10/App.css"
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import Card from '../components/Card';
import { IconButton } from '@mui/material';


export default function App() {

    const users = convertUsersToArrayOfObject(dataJson)

    const cards = users.map((e, i) => {
        return (
            <Card user={e} key={i} />
        )
    })


    return (
        <div className="App">
            <Main>
                {/* <Image src={users[0].imgSrc} duration={0}/> */}
                {cards}
                {/* <Card user={user} /> */}
            </Main>

            <NavbarCustom>
                <NavbarItem>
                    <IconButton>
                        <PreviousIcon />
                    </IconButton>
                </NavbarItem>
                <NavbarItem>
                    {/* <PlayIcon/> */}
                    <IconButton>
                        <PlayIcon />
                    </IconButton>
                </NavbarItem>
                <NavbarItem>
                    <IconButton>
                        <NextIcon />
                    </IconButton>
                </NavbarItem>
            </NavbarCustom>
        </div>
    )
}

function convertUsersToArrayOfObject(users) {
    const pos = getUserPositionIndex(users[0])

    const usersArrayOfObject = users.map(
        (user) => {
            return getUser(user, pos)
        }
    )
    usersArrayOfObject.shift()
    return usersArrayOfObject
}

function getUser(targetUser, pos) {
    return (
        {
            name: targetUser[pos.name],
            grade: targetUser[pos.grade],
            imgSrc: targetUser[pos.imgSrc],
            wish: targetUser[pos.wish]
        }
    )
}
function getUserPositionIndex(user0) {
    var pos = Object()
    user0.map(
        (e, i) => {
            pos[e] = i
        }
    )
    pos.imgSrc = pos.ThumbnailLink
    pos.name = pos.Name
    pos.grade = pos.Grade
    pos.wish = pos.Wish
    return pos
}