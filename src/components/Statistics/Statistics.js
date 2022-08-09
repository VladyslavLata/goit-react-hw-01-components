import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { StatTitle, StatItem,StatText } from './Statistics.styled';
import { getRandomHexColor } from 'utils/colorRandom';

export function Statistics({ title, stats }) {
  return (
    <Box
      as="section"
      display="inline-block"
      bg="bgWhite"
      boxShadow=" 0px 0px 37px 7px rgba(34, 60, 80, 0.2)"
    >
      {title && <StatTitle>{title}</StatTitle>}
      <Box as="ul" display="inline-flex">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <StatText>{label}</StatText>
              <StatText>{`${percentage}%`}</StatText>
            </StatItem>
          );
        })}
      </Box>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
