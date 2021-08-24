import Star from 'assets/images/star.svg';

import './styles.css';

const UserReview = () => {
  return (
    <div className="review-container">
      <div className="username-container">
        <img src={Star} alt="estrela" />
        <h1>Maria Silva</h1>
      </div>
      <div className="review-content-container">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
};

export default UserReview;
