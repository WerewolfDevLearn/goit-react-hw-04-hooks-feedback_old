import Proptypes from 'prop-types';
import OLIstl from './OptionListItem.module.css';
export default function OptionListItem({ option, func }) {
  return (
    <li className={OLIstl.feedbackOptionItem}>
      <button type="button" className={OLIstl.button} onClick={func}>
        {option}
      </button>
    </li>
  );
}

OptionListItem.propTypes = {
  option: Proptypes.string.isRequired,
  func: Proptypes.func.isRequired,
};
