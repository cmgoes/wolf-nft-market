// import iconArt from 'assets/svgs/rainbow.svg';
// import iconCollectibles from 'assets/svgs/bear.svg';
// import iconSports from 'assets/svgs/soccerball.svg';
// import iconUtility from 'assets/svgs/tools.svg';
// import iconTrading from 'assets/svgs/cardboard.svg';
// import iconVirtual from 'assets/svgs/monster.svg';
// import iconDomain from 'assets/svgs/domain.svg';
import iconSearch from 'assets/svgs/magnifier.svg';

export const GroupFilters = [
  {
    value: 'all',
    label: 'All Items',
  },
  {
    value: 'single',
    label: 'Single Items',
  },
  // {
  //   value: 'bundle',
  //   label: 'Bundles',
  // },
];

export const Categories = [
  {
    id: 0,
    icon: iconSearch,
    label: 'VersaGames',
  },
  {
    id: 1,
    icon: iconSearch,
    label: 'Verified Games',
  },
  {
    id: 2,
    icon: iconSearch,
    label: 'Games',
  },
  {
    id: 3,
    icon: iconSearch,
    label: 'NFTs',
  },
  {
    id: 4,
    icon: iconSearch,
    label: 'Trading Cards',
  },
  {
    id: 5,
    icon: iconSearch,
    label: 'Promotion',
  },
  {
    id: 6,
    icon: iconSearch,
    label: 'Domain Names',
  },
];

export const SortByOptions = [
  {
    id: 'createdAt',
    label: 'Recently Created',
  },
  {
    id: 'oldest',
    label: 'Oldest',
  },
  {
    id: 'listedAt',
    label: 'Recently Listed',
  },
  {
    id: 'soldAt',
    label: 'Recently Sold',
  },
  {
    id: 'saleEndsAt',
    label: 'Ending Soon',
  },
  {
    id: 'price',
    label: 'Highest Price',
  },
  {
    id: 'cheapest',
    label: 'Lowest Price',
  },
  {
    id: 'lastSalePrice',
    label: 'Highest Last Sale',
  },
  {
    id: 'viewed',
    label: 'Mostly Viewed',
  },
];

const FilterConstants = {
  UPDATE_STATUS_FILTER: 'UPDATE_STATUS_FILTER',
  UPDATE_COLLECTIONS_FILTER: 'UPDATE_COLLECTIONS_FILTER',
  UPDATE_CATEGORIES_FILTER: 'UPDATE_CATEGORIES_FILTER',
  UPDATE_GROUP_TYPE_FILTER: 'UPDATE_GROUP_TYPE_FILTER',
  UPDATE_SORT_BY_FILTER: 'UPDATE_SORT_BY_FILTER',
};

export default FilterConstants;
