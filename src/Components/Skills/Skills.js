import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';


class Skills extends Component {
    render() {
        return (
            // <div>
                <Grid>
                    <Grid.Row columns={3} only='computer'>
                        <Grid.Column>
                            <Segment>Hey</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Hi</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            // {/* </div> */}
        );
    }
}

export default Skills;