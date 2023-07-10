import PropTypes from 'prop-types'; // ES6
import {
  Section,
  Title,
  Container,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

function setRandomBackgroundColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

export function Statistics({ title, stats }) {
  return (
    <Section>
      <Container>
        {title && <Title>{title}</Title>}
        <List>
          {stats.map(({ id, label, percentage }) => (
            <Item
              key={id}
              style={{
                backgroundColor: `${setRandomBackgroundColor()}`,
              }}
            >
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
