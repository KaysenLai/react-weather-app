import './dailyWeather.scss';
import moment from 'moment-timezone';
import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getWeatherIcon } from '../../utils/getWeatherICon';

const mapStateToProps = (state) => ({
  primaryColor: state.theme.primaryColor,
  secondColor: state.theme.secondColor,
});

const DailyWeather = (props) => {
  const { primaryColor, secondColor, number, textDay, tempMax, tempMin, icon, date } = props;
  const week = moment(date).format('dddd');

  return (
    <div className="daily-weather">
      <div className="daily-weather__left">
        <i
          title={textDay}
          style={{ color: primaryColor }}
          className={classnames('daily-weather__icon', getWeatherIcon(icon))}
        />
        <div className="daily-weather__wrap">
          <h4>{week}</h4>
          <p>{textDay}</p>
        </div>
      </div>
      <div
        className="daily-weather__right"
        style={number === 0 ? { backgroundColor: primaryColor } : { backgroundColor: secondColor }}
      >
        <span>{`${tempMax}° / ${tempMin}°`}</span>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(DailyWeather);
