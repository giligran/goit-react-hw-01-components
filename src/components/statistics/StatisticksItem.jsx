import PropTypes from 'prop-types'; // ES6
import css from 'components/statistics/Statistics.module.css';

function StatisticsItem({ label, percentage }) {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </>
  );
}

StatisticsItem.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
