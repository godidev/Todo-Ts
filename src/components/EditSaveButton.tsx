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
  const styles = {
    backgroundColor: isEditing ? 'green' : '',
  }
  return (
    <button style={styles} onClick={handleClick}>
      {isEditing ? 'Save' : 'Edit'}
    </button>
  )
}
export default EditSaveButton
