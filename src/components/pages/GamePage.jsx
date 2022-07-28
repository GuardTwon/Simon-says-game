import React from 'react'
import { Grid } from '../Grid'
import { Nav } from '../nav/Nav'
import { Board } from '../Scores/Board'
import { StarButton } from '../StarButton'

export const GamePage = () => {
  return (
    <>
        <Nav/>
        <Board />
        <Grid/>
        <StarButton/>
    </>
  )
}
