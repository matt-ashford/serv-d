import ProductPageWithData from "./ProductPageWithData";
import ProductPageEmpty from "./ProductPageEmpty";

export const ProductPage = (props) => {
  const { selectedProductId, joinedDataAnnual, joinedDataQtr } = props;

  let renderedSection;
  let dynamicMarginBottom = 5;

  if (selectedProductId && selectedProductId !== 0) {
    renderedSection = (
      <ProductPageWithData
        selectedProductId={selectedProductId}
        joinedDataAnnual={joinedDataAnnual}
        joinedDataQtr={joinedDataQtr}
      />
    );
    dynamicMarginBottom = 0;
  } else {
    renderedSection = <ProductPageEmpty />;
  }

  return (
    <div
      style={{
        marginBottom: `${dynamicMarginBottom}rem`,
      }}
    >
      {renderedSection}
    </div>
  );
};

export default ProductPage;
