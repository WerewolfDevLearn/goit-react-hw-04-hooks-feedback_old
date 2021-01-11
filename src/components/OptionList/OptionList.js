import Proptypes from 'prop-types';
import OptionListItem from './OptionListItem/OptionListItem';
import OLStl from './OptionList.module.css';
export default function OptionList({ options, arrOfFunc }) {
  return (
    <ul className={OLStl.feedbackOptions}>
      {options.map((option, idx) => {
        return (
          <OptionListItem
            key={`Button-${option}`}
            option={option}
            func={arrOfFunc[idx]}
          />
        );
      })}
    </ul>
  );
}

OptionList.propTypes = {
  options: Proptypes.arrayOf(Proptypes.string.isRequired).isRequired,
  arrOfFunc: Proptypes.arrayOf(Proptypes.func.isRequired).isRequired,
};
