import PropTypes from 'prop-types'; // ES6
import css from 'components/statistics/Statistics.module.css';
import StatisticsItem from './StatisticksItem';

function setRandomBackgroundColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

export function Statistics({ title, stats }) {
  return (
    <section className={css.stats}>
      <div className={css.container}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.list}>
          {stats.map(({ label, percentage, id }) => (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: setRandomBackgroundColor() }}
            >
              <StatisticsItem label={label} percentage={percentage} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Statistics;
