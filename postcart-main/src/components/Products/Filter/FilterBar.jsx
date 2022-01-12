import React, {useState} from 'react';
import { Typography, Button, Card, Grid, RadioGroup, FormControlLabel, Radio, Slider } from '@material-ui/core';

import useStyles from './styles';

const FilterBar = ({filterProducts}) => {

    const classes = useStyles();
    // const [priceFilter, setPriceFilter] = useState([]);
    const [value, setValue] = useState([0,50]);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    }

    // const handlePriceFilter = (event) => {
    //     console.log(event);
    // }


    return (
        <Card className={classes.filterBar}>
            <Typography>Narrow By:</Typography>
            <br />
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                    <Typography className={classes.filterText}>Category</Typography>
                    <RadioGroup onChange={(event) => {filterProducts(event.target.value)}}>
                        <FormControlLabel value="feminine" control={<Radio />} label="Feminine" />
                        <FormControlLabel value="wildlife" control={<Radio />} label="Wildlife" />
                        <FormControlLabel value="macabre" control={<Radio />} label="Macabre" />  
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                    <Typography className={classes.filterText}>Price</Typography>
                    <Slider
                        value={value}
                        min={0}
                        max={800}
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                    <Typography className={classes.filterText}>Rating</Typography>
                </Grid>
            </Grid>
            <Button className={classes.resetButton} variant="outlined" onClick={() => filterProducts()}>Reset Filters</Button>
            
        </Card>
    )
}

export default FilterBar
