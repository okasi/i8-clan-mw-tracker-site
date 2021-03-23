import ComputerIcon from "../components/icons/ComputerIcon"
import PlaystationIcon from "../components/icons/PlaystationIcon"
import XboxIcon from "../components/icons/XboxIcon"

export const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'Playstation':
      return <PlaystationIcon></PlaystationIcon>
      break
    case 'Xbox':
      return <XboxIcon></XboxIcon>
      break
    case 'PC':
      return <ComputerIcon></ComputerIcon>
      break
  }
}