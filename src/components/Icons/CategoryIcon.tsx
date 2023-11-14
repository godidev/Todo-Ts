type Props = {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function CategoryIcon({ onMouseEnter, onMouseLeave }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='category-icon'
      fill='white'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      clipRule='evenodd'
      viewBox='0 0 24 24'
    >
      <path
        fillRule='nonzero'
        d='M18.891 19.498H5.109l-1.52-9.501h16.823zM4.585 6.992h14.868l-.227 1.506H4.811zm.993-2.494H18.46l-.13.983H5.707zm16.421 4.998a1 1 0 00-1.001-.998h-.253c.309-2.064.289-1.911.289-2.009 0-.58-.469-1.008-1-1.008h-.189c.193-1.461.187-1.399.187-1.482 0-.671-.575-1.001-1.001-1.001H5.007c-.536 0-1.001.433-1.001 1 0 .083-.008.013.188 1.483h-.19c-.524 0-1.001.422-1.001 1.007 0 .101-.016-.027.29 2.01h-.291a1 1 0 00-1.001.999c0 .118-.105-.582 1.694 10.659a.999.999 0 00.988.842h14.635a.999.999 0 00.988-.842c1.801-11.25 1.693-10.54 1.693-10.66z'
      ></path>
    </svg>
  )
}
export default CategoryIcon
