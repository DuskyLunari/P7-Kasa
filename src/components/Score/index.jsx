import './Score.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Score({ score }) {
  const rating = Math.min(Math.max(parseInt(score, 10), 1), 5);

  return (
    <div className="score">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`fa-star fa-solid ${star <= rating ? 'filled' : 'regular'}`}
          aria-hidden="true"
        ></i>
      ))}
    </div>
  );
}