import { FC } from 'react';
import { Box } from '@material-ui/core';
import MItemCard from './MItemCard';
import MItemCardSkeleton from './MItemCardSkeleton';

interface MItemListingContainerProps {
  isDataLoaded: boolean;
}

const MItemListingContainer: FC<MItemListingContainerProps> = ({ isDataLoaded, ...other }) => {
  const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box className="listing-container">
      {isDataLoaded
        ? elements.map((value) => {
            return (
              <MItemCard
                key={`item-card-${value}`}
                hasAvatar={false}
                isLiked={false}
                isUsed={true}
                isListing={true}
                username="yanhanapple<3"
                title="Apple For Sale"
              />
            );
          })
        : elements.map((value) => {
            return <MItemCardSkeleton key={`item-card-skeleton-${value}`} />;
          })}
    </Box>
  );
};

export default MItemListingContainer;
