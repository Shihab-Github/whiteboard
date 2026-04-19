import rectangleIcon from "../assets/icons/rectangle.svg"
import type { TOOL_TYPE } from "../constants/toolType.ts"

type IconButtonProps = {
  src: string
  type: TOOL_TYPE
}

export const IconButton = (props: IconButtonProps) => {
  const { src } = props
  return (
    <button className="menu_button">
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
