import foods from '../../../food.json';

const getFoods = (req, res) => {
  res.status(200).json(foods);
};

export default (getFoods)
