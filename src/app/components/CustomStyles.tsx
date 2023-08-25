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

export const leftColumnStyle = {
    ...flexColumnStyle,
    gap: '1rem',
    padding: '1rem',
    width: '50%',
    textAlign: 'center',
    float: 'left',
}

export const rightColumnStyle = {
    ...leftColumnStyle,
    float: 'right'
}