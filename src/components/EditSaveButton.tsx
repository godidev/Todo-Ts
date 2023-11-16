import EditIcon from './Icons/EditIcon'
import SaveIcon from './Icons/SaveIcon'
import './Icons/Icons.css'

type Props = {
  isEditing: boolean
  handleEditchange: () => void
  handleSave: () => void
}

function EditSaveButton({
  isEditing,
  handleEditchange,
  handleSave,
}: Props): JSX.Element {
  const handleClick = () => {
    handleEditchange()
    handleSave()
  }
  return isEditing ? (
    <SaveIcon handleClick={handleClick} />
  ) : (
    <EditIcon handleClick={handleClick} />
  )
}
export default EditSaveButton
