import React, {useEffect, useState} from 'react';
import {Button, Box, Grid, Typography} from '@mui/material';

function TreeVisualization() {




    return (
        <div>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} >
                    <Box display="flex" justifyContent="center" sx={{fontSize: '30px', fontWeight: 'bold', paddingTop: '60px'}}>
                        Vietnamese Food Decision Tree Classifier
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box justifyContent="center" sx={{paddingLeft: '180px', paddingRight: '150px'}} >
                        <Typography variant="body1" >
                            ○ Decision Tree classifier is a Machine Learning model that uses a tree-like model of different decisions
                        </Typography>

                        <Typography variant="body1" >
                               ○ Entropy? -> Measure of randomness or unpredictability in the dataset. Entropy = P(Value(ith) * log2(P(Value(ith)) Example: Three giraffes out of six animals: Entropy = (3/8) * log2(3/8)
                        </Typography>
                        <Typography variant="body1" >
                               ○ What are we trying to achieve? -> Highest level has the highest entropy, we want to get to the leaf node (entropy = 0)
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img src="/static/photos/vietnamese_food_tree.png" alt="Decision Tree Visualization" style={{ maxWidth: '100%', maxHeight: '1500px'}} />
                        </Box>
                </Grid>


            </Grid>
        </div>
    );
}

export default TreeVisualization;
