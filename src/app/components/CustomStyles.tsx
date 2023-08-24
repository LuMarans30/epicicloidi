import { CSSProperties } from "react"

export const flexRowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
}

export const flexColumnStyle: CSSProperties = {
    ...flexRowStyle,
    flexDirection: 'column'
}