import Slider from "./components/Slider/Slider";
import './styles.scss';

interface sliderItemStylesType {
  width: string
}

function App() {
  const imgLinks = [
    'https://korzik.net/uploads/posts/2011-04/1302509289_1302382236_18.jpg',
    'https://get.wallhere.com/photo/5092x3438-px-animals-leopard-1098679.jpg',
    'https://img1.akspic.ru/attachments/crops/2/2/4/0/50422/50422-senokosnoye_ugodye-pole-selskoe_hozyajstvo-zakat-risovoe_pole-2560x1440.jpg',
  ];

  const sliderItemStyles: sliderItemStylesType = {
    width: '700px',
  }

  return (
    <div className="container">
      <Slider imgLinks={imgLinks} sliderItemStyles={sliderItemStyles} />
    </div>
  )
}

export default App
