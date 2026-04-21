import classNames from 'classnames';
import rectangleIcon from "../../assets/icons/rectangle.svg"
import type { TOOL_TYPE } from "../../constants/toolType.ts"

import { setToolType } from "../slices/whiteboard.slice.ts"
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts"

type IconButtonProps = {
  src: string
  type: TOOL_TYPE
}

export const IconButton = (props: IconButtonProps) => {
  const { src, type } = props

  const dispatch = useAppDispatch()
  const selectedTool = useAppSelector(state => state.whiteboard.tool)

  const handleToolChange = () => {
    dispatch(setToolType(type))
  }

  const buttonClassNames = classNames('menu_button', {
    'menu_button_active': selectedTool === type,
  })

  return (
    <button className={buttonClassNames} onClick={handleToolChange}>
      <img src={src} height="80%" width="80%" alt={"logo"} />
    </button>
  )
}

export const Menu = () => {
  return (
    <div className="menu_container">
      <IconButton src={rectangleIcon} type={"RECTANGLE"} />
    </div>
  )
}
