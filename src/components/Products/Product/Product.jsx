import React from "react";
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from './styles';


const Product = ({product, onAddToCart}) => {
    const classes= useStyles()

    // return <div>test</div>

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={Product.name}/> 
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                    {product.price.formatted_with_symbol}
                    </Typography>

                </div>
                <Typography variant="body2" dangeroulysetinnerhtml={{ __html: product.description}}color="textSecondary" />
    
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="add to cart" onClick={()=>onAddToCart(product.id,1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </CardContent>

        </Card>
    );
}

export default Product