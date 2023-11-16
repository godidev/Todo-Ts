type Props = {
  handleClick: () => void
}

const SaveIcon = ({ handleClick }: Props) => (
  <svg
    onClick={handleClick}
    xmlns='http://www.w3.org/2000/svg'
    width='100%'
    height='100%'
    viewBox='0 0 24 24'
  >
    <path d='M14 3h2.997v5H14V3zm9 1v20H1V0h17.997L23 4zM6 9h12V2H6v7zm14 4H4v9h16v-9z' />
  </svg>
)
export default SaveIcon
