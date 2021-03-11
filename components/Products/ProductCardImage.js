import React from "react";
import { CardMedia, Typography } from "@material-ui/core";
import axios from "axios";

const ProductCardImage = ({ productId }) => {
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    async function fetchImageByProdId() {
      const response = await axios.get(`/api/products/image/${productId}`);

      if (response.status === 200) {
        setImage(response.data.payload[0].img);
      }
    }

    fetchImageByProdId();
  }, []);

  image ?? (
    <Typography variant="h3" component="h2">
      Loading...
    </Typography>
  );

  return (
    <CardMedia
      style={{
        height: 350,
        paddingTop: "56.25%",
      }}
      image={image}
      title={"Lorem Ipsum"}
    />
  );
};

export default ProductCardImage;
