const Arrow: React.FC<{ right?: boolean; isValid?: boolean }> = ({
  right,
  isValid,
}) => (
  <>
    {right ? (
      <svg
        width='18'
        height='23'
        viewBox='0 0 18 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1L15 11.3158L1 21.6316'
          stroke={isValid ? '#232323' : '#8D8D8D'}
          strokeWidth='2.4'
        />
      </svg>
    ) : (
      <svg
        width='18'
        height='23'
        viewBox='0 0 18 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17 1L3 11.3158L17 21.6316'
          stroke='#232323'
          strokeWidth='2.4'
        />
      </svg>
    )}
  </>
);

export default Arrow;
