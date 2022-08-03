import PropTypes from 'prop-types';

export function Statistics({title, stats}) {
  return (<div>
    {title && (<h2>{title}</h2>)}
    <ul>{stats.map(stat => {
      return <li key={stat.id}><span>{stat.label}</span>
        <span>{`${stat.percentage}%`}</span></li>
    }) }</ul>
</div>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
} 
