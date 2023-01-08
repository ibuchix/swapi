import React from 'react'
import {Card, Grid} from 'semantic-ui-react';

const People = ({data}) => {
  return (
    <>
        <h1>Poeple</h1>
        <Grid columns={3}>
            {data.map((people, i)=>{
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <strong>Height</strong>
                                    <p>{people.height}</p>
                                    <strong>Mass</strong>
                                    <p>{people.mass}</p>
                                    <strong>Skin Color</strong>
                                    <p>{people.skin_color}</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )

            })}
        </Grid>
    </>
  )
}

export default People