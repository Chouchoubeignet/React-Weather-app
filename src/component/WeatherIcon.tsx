import CloudyIcon from '../assets/icons/cloudy.svg';
import HazeIcon from '../assets/icons/haze.svg';
import HeavyRainIcon from '../assets/icons/heavy-rain.svg';
import PartlyCloudyIcon from '../assets/icons/partly-cloudy.svg';
import RainIcon from '../assets/icons/rain.svg';
import SleetIcon from '../assets/icons/sleet.svg';
import SnowIcon from '../assets/icons/snow.svg';
import SunnyIcon from '../assets/icons/sunny.svg';
import ThunderstormIcon from '../assets/icons/thunderstorm.svg';

type Props = {
  code: number
}

const WeatherIcon = ({code}: Props) => {
  let Icon = '';

  switch (code) {
    // Thunderstorm
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      Icon = ThunderstormIcon;
      break;

    // Drizzle
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      Icon = RainIcon;
      break;

    // Rain
    case 500:
    case 501:
    case 511:
    case 520:
    case 521:
      Icon = RainIcon;
      break;

    case 502:
    case 503:
    case 504:
    case 522:
    case 531:
      Icon = HeavyRainIcon;
      break;

    // Snow
    case 600:
    case 601:
    case 602:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      Icon = SnowIcon;
      break;
    case 611:
      Icon = SleetIcon;
      break;

    // Atmosphere
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      Icon = HazeIcon;
      break;

    // Clear
    case 800:
      Icon = SunnyIcon;
      break;

    // Clouds
    case 801:
    case 802:
      Icon = PartlyCloudyIcon;
      break;
    case 803:
    case 804:
      Icon = CloudyIcon;
      break;

    default:
      Icon = SunnyIcon;
  }
  
  return <img style={{ width: '100px', height: '100px' }} src={Icon} />;
};

export default WeatherIcon;
