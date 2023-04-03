import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

interface ResultItemProps {
  data: any;
}

const ResultItem: React.FC<ResultItemProps> = ({ data }) => {
  // console.log(data)
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {data.champ}
        </Typography>
        <Typography variant="body2" component="p">
          {data.sport}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResultItem;
