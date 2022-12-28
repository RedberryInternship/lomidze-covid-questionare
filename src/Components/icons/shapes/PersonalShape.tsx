import { ShapeProps } from 'Components';

export const PersonalShape: React.FC<ShapeProps> = ({ className }) => (
  <svg
    className={`shape-personal ${className || ''}`}
    width='622'
    height='75'
    viewBox='0 0 622 75'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='622' height='75' fill='#D6D16E' />
  </svg>
);
