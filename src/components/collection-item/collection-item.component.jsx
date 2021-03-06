import React from 'react';
import './collection-item.styles.scss';

//import { CartContext } from '../../providers/cart/cart.provider';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  //const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  //const { addItem } = useContext(CartContext);

  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;

//
// *** Before using GraphQL
//

// import React, { useContext } from 'react';
// import './collection-item.styles.scss';

// //import { connect } from 'react-redux';
// //import { addItem } from '../../redux/cart/cart.actions';
// import { CartContext } from '../../providers/cart/cart.provider';

// import {
//   CollectionItemContainer,
//   CollectionFooterContainer,
//   AddButton,
//   BackgroundImage,
//   NameContainer,
//   PriceContainer,
// } from './collection-item.styles';

// // const CollectionItem = ({ item, addItem }) => {
// const CollectionItem = ({ item }) => {
//   const { name, price, imageUrl } = item;
//   const { addItem } = useContext(CartContext);

//   return (
//     <CollectionItemContainer>
//       <BackgroundImage
//         className="image"
//         style={{
//           backgroundImage: `url(${imageUrl})`,
//         }}
//       />
//       <CollectionFooterContainer>
//         <NameContainer>{name}</NameContainer>
//         <PriceContainer>{price}</PriceContainer>
//       </CollectionFooterContainer>
//       <AddButton onClick={() => addItem(item)} inverted>
//         Add to cart
//       </AddButton>
//     </CollectionItemContainer>
//   );
// };

// // const mapDispatchToProps = dispatch => ({
// //   addItem: item => dispatch(addItem(item)),
// // });

// //export default connect(null, mapDispatchToProps)(CollectionItem);
// export default CollectionItem;

//
// *** Before using cart provider
//

// import React from 'react';
// import './collection-item.styles.scss';
// //import CustomButton from '../custom-button/custom-button.component';

// import { connect } from 'react-redux';
// import { addItem } from '../../redux/cart/cart.actions';

// import {
//   CollectionItemContainer,
//   CollectionFooterContainer,
//   AddButton,
//   BackgroundImage,
//   NameContainer,
//   PriceContainer,
// } from './collection-item.styles';

// const CollectionItem = ({ item, addItem }) => {
//   const { name, price, imageUrl } = item;

//   return (
//     <CollectionItemContainer>
//       <BackgroundImage
//         className="image"
//         style={{
//           backgroundImage: `url(${imageUrl})`,
//         }}
//       />
//       <CollectionFooterContainer>
//         <NameContainer>{name}</NameContainer>
//         <PriceContainer>{price}</PriceContainer>
//       </CollectionFooterContainer>
//       <AddButton onClick={() => addItem(item)} inverted>
//         Add to cart
//       </AddButton>
//     </CollectionItemContainer>
//   );
// };

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item)),
// });

// export default connect(null, mapDispatchToProps)(CollectionItem);
