import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.7959 15.2041C16.9008 15.3086 16.984 15.4328 17.0408 15.5695C17.0976 15.7063 17.1268 15.8529 17.1268 16.0009C17.1268 16.149 17.0976 16.2956 17.0408 16.4324C16.984 16.5691 16.9008 16.6933 16.7959 16.7978C16.69 16.9028 14.1709 19.3769 10 19.3769C6.83969 19.3769 4.43594 17.74 2.875 16.2025V17.5C2.875 17.7984 2.75647 18.0845 2.5455 18.2955C2.33452 18.5065 2.04837 18.625 1.75 18.625C1.45163 18.625 1.16548 18.5065 0.954505 18.2955C0.743526 18.0845 0.625 17.7984 0.625 17.5V13C0.625 12.7016 0.743526 12.4155 0.954505 12.2045C1.16548 11.9935 1.45163 11.875 1.75 11.875H6.25C6.54837 11.875 6.83452 11.9935 7.0455 12.2045C7.25647 12.4155 7.375 12.7016 7.375 13C7.375 13.2984 7.25647 13.5845 7.0455 13.7955C6.83452 14.0065 6.54837 14.125 6.25 14.125H4.01125C5.23938 15.4675 7.3 17.125 10 17.125C13.2466 17.125 15.1853 15.2237 15.2041 15.2041C15.3085 15.0995 15.4326 15.0165 15.5692 14.9599C15.7058 14.9033 15.8522 14.8741 16 14.8741C16.1478 14.8741 16.2942 14.9033 16.4308 14.9599C16.5674 15.0165 16.6915 15.0995 16.7959 15.2041ZM18.25 1.375C17.9516 1.375 17.6655 1.49353 17.4545 1.7045C17.2435 1.91548 17.125 2.20163 17.125 2.5V3.79938C15.5641 2.26188 13.1603 0.625 10 0.625C5.83188 0.625 3.31 3.09906 3.20406 3.20406C2.99272 3.41541 2.87399 3.70205 2.87399 4.00094C2.87399 4.29982 2.99272 4.58647 3.20406 4.79781C3.41541 5.00916 3.70205 5.12789 4.00094 5.12789C4.29982 5.12789 4.58647 5.00916 4.79781 4.79781C4.81469 4.77625 6.75344 2.875 10 2.875C12.7 2.875 14.7606 4.5325 15.9888 5.875H13.75C13.4516 5.875 13.1655 5.99353 12.9545 6.2045C12.7435 6.41548 12.625 6.70163 12.625 7C12.625 7.29837 12.7435 7.58452 12.9545 7.7955C13.1655 8.00647 13.4516 8.125 13.75 8.125H18.25C18.5484 8.125 18.8345 8.00647 19.0455 7.7955C19.2565 7.58452 19.375 7.29837 19.375 7V2.5C19.375 2.20163 19.2565 1.91548 19.0455 1.7045C18.8345 1.49353 18.5484 1.375 18.25 1.375Z'
      fill='#F7F7F7'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };