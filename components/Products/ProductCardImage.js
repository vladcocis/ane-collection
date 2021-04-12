import React from "react";
import { CardMedia, Typography } from "@material-ui/core";
import axios from "axios";
import { useRouter } from 'next/router'

const ProductCardImage = ({ productId }) => {
  const [image, setImage] = React.useState("https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif");

  const router = useRouter()

  React.useEffect(() => {
    if (!router.isReady) {
      return
    }

    async function fetchImageByProdId() {
      const response = await axios.get(`/api/products/image/${productId}`);

      if (response.status === 200) {
        setImage(response.data.payload[0].img);
      }
    }

    fetchImageByProdId();
  }, [router.isReady]);

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
