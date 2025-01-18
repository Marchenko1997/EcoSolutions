import ImageSun from "../ImagesContent/ImageSun/ImageSun";
import ImageWind from "../ImagesContent/ImageWind/ImageWind";
import { cards } from "../../../data/cardsValues";
import CardValue from "../CardValue/CardValue";
import { List } from "./ListValues.styled";

const ListValues = () => {
  return (
    <List>
      <CardValue card={cards[0]} key={cards[0].id} />
      <CardValue card={cards[1]} key={cards[1].id} />
      <ImageWind />
      <ImageSun />
      <CardValue card={cards[2]} key={cards[2].id} />
      <CardValue card={cards[3]} key={cards[3].id} />
    </List>
  );
};

export default ListValues;
