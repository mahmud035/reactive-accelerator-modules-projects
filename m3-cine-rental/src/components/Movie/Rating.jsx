import starIcon from '../../assets/icons/star.svg';

const Rating = ({ value }) => {
  const stars = Array(value).fill(starIcon);

  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="star" />
      ))}
    </>
  );
};

export default Rating;

// NOTE: Array(value).fill(starIcon) => value এর মান যতো, ততো গুলো element এর একটা করে array তৈরি করবে। এবং সেই element এর index গুলো fill হবে starIcon (SVG) দ্বারা।

//* Example:
// when value = 5
// [
//   '/src/assets/icons/star.svg',
//   '/src/assets/icons/star.svg',
//   '/src/assets/icons/star.svg',
//   '/src/assets/icons/star.svg',
//   '/src/assets/icons/star.svg',
// ];

// when value = 3
// [
//   '/src/assets/icons/star.svg',
//   '/src/assets/icons/star.svg',
//   '/src/assets/icons/star.svg',
// ];
