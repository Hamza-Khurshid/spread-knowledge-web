import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
}

export default class Proposal extends Component {
    
    render() {
        let { text } = this.props;

        return (
            <Card style={[styles.card, {display: 'flex', justifyContent:'center', alignItems: 'center'}]}>
                <CardContent>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }
}
