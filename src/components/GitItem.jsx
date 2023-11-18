import PropTypes from 'prop-types';



export const GitItem = ({ title, url, id }) => {
    console.log( title, url, id )

  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GitItem.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    id: PropTypes.string
  }