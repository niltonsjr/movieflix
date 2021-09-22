import Star from 'assets/images/star.svg';

import './styles.css';

type Props = {
  text?: string;
  userName?: string;
};

const UserReview = ({ text, userName }: Props) => {
  return (
    <div className="review-container">
      <div className="username-container">
        <img src={Star} alt="estrela" />
        <h1>{userName}</h1>
      </div>
      <div className="review-content-container">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UserReview;
