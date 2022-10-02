import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Skeleton,
} from '@mui/material';
import styles from './Rooms.module.scss';

const Rooms = () => {
  const loading = true;

  return (
    <>
      <Container maxWidth="lg">
        <Card>
          <CardContent className={styles.parent}>
            {loading ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={200}
                height={200}
              />
            ) : (
              <CardMedia></CardMedia>
            )}
            <Card className="child">
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={500}
                  height={400}
                />
              ) : (
                <CardContent> room content goes here</CardContent>
              )}
            </Card>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Rooms;
